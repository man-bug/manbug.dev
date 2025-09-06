terraform {
  required_providers {
    cloudflare = {
      source = "cloudflare/cloudflare"
    }
  }
}

#===============================================================================
# www
#===============================================================================
# create www worker
resource "cloudflare_workers_script" "www_worker" {
  account_id  = var.cloudflare_account_id
  script_name = var.www_project_name
  content     = "addEventListener('fetch', event => { event.respondWith(new Response('Worker OK')) })"

  # tell terraform to ignore changes that future deployments might affect
  lifecycle {
    ignore_changes = [
      content,
      bindings,
      compatibility_date,
      observability,
    ]
  }
}
# map worker's domains
resource "cloudflare_workers_custom_domain" "www_worker_domain" {
  account_id  = var.cloudflare_account_id
  environment = "production"
  zone_id     = var.zone_id
  hostname    = "www.manbug.dev"
  service     = cloudflare_workers_script.www_worker.script_name
}
resource "cloudflare_workers_custom_domain" "www_worker_root_domain" {
  account_id  = var.cloudflare_account_id
  environment = "production"
  zone_id     = var.zone_id
  hostname    = "manbug.dev"
  service     = cloudflare_workers_script.www_worker.script_name
}
