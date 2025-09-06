#===============================================================================
# ZONE - modules/zone/main.tf
#===============================================================================
output "zone_id" {
  value       = module.zone.zone_id
  description = "Zone ID for manbug.dev"
}
