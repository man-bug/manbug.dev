output "zone_id" {
  value       = data.cloudflare_zone.manbug.zone_id
  description = "Zone ID for manbug.dev"
}
