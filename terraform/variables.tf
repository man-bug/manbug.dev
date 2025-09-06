#===============================================================================
# CLOUDFLARE
#===============================================================================
variable "cloudflare_account_id" {
  description = "Cloudflare account ID"
  type        = string
  sensitive   = true
}

# https://developer.hashicorp.com/terraform/language/expressions/strings#heredoc-strings
variable "cloudflare_dns_api_token" {
  description = <<-EOT
  Cloudflare API token with permissions:
  - Zone -> Zone = Read & Edit
  - Zone -> DNS = Read & Edit
  - Zone -> Zone Settings = Read & Edit
  - Zone -> Bot Management = Edit
  EOT
  type        = string
  sensitive   = true
}

variable "cloudflare_workers_api_token" {
  description = <<-EOT
    Cloudflare API token with permissions:
    - Account -> Workers Scripts = Read & Edit
  EOT
  type        = string
  sensitive   = true
}

#===============================================================================
# PROJECTS
#===============================================================================

### WWW ###
variable "www_project_name" {
  description = "Cloudflare Workers project name for www"
  default     = "manbug-www"
  type        = string
}
