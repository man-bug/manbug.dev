module "zone" {
  source = "./modules/zone"

  providers = {
    cloudflare = cloudflare.dns
  }
}

module "workers" {
  source = "./modules/workers"

  providers = {
    cloudflare = cloudflare.workers
  }

  cloudflare_account_id = var.cloudflare_account_id
  www_project_name      = var.www_project_name
  zone_id               = module.zone.zone_id
}
