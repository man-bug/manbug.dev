variable "cloudflare_account_id" {
  type        = string
  description = "Cloudflare account ID"
  sensitive   = true
}

variable "zone_id" {
  type        = string
  description = "Zone ID for manbug.dev"
}

variable "www_project_name" {
  description = "Cloudflare Workers project name for www"
  type        = string
}
