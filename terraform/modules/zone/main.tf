terraform {
  required_providers {
    cloudflare = {
      source = "cloudflare/cloudflare"
    }
  }
}

data "cloudflare_zone" "manbug" {
  filter = {
    name = "manbug.dev"
  }
}

# perf
resource "cloudflare_zone_setting" "image_resizing" {
  zone_id    = data.cloudflare_zone.manbug.zone_id
  setting_id = "image_resizing"
  value      = "on"
}

# security
resource "cloudflare_zone_setting" "always_use_https" {
  zone_id    = data.cloudflare_zone.manbug.zone_id
  setting_id = "always_use_https"
  value      = "on"
}
resource "cloudflare_zone_setting" "browser_check" {
  zone_id    = data.cloudflare_zone.manbug.zone_id
  setting_id = "browser_check"
  value      = "on"
}
resource "cloudflare_bot_management" "bot_management" {
  zone_id            = data.cloudflare_zone.manbug.zone_id
  ai_bots_protection = "block"
  crawler_protection = "enabled"
  enable_js          = true
  fight_mode         = true
}
