terraform {
  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "5.6.0"
    }
  }
}

provider "cloudflare" {
  api_token = var.cloudflare_dns_api_token
  alias     = "zone"
}

provider "cloudflare" {
  api_token = var.cloudflare_dns_api_token
  alias     = "dns"
}

provider "cloudflare" {
  api_token = var.cloudflare_workers_api_token
  alias     = "workers"
}
