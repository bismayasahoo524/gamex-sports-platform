# ==========================================
# SQS Outputs
# ==========================================

output "registration_fifo_queue_url" {
  description = "Registration FIFO SQS queue URL"
  value       = aws_sqs_queue.registration_fifo.url
}

output "registration_fifo_queue_arn" {
  description = "Registration FIFO SQS queue ARN"
  value       = aws_sqs_queue.registration_fifo.arn
}

output "ai_inference_fifo_queue_url" {
  description = "AI inference FIFO SQS queue URL"
  value       = aws_sqs_queue.ai_inference_fifo.url
}

output "ai_inference_fifo_queue_arn" {
  description = "AI inference FIFO SQS queue ARN"
  value       = aws_sqs_queue.ai_inference_fifo.arn
}

output "sync_reconnect_std_queue_url" {
  description = "Reconnect synchronization SQS queue URL"
  value       = aws_sqs_queue.sync_reconnect_std.url
}

output "sync_reconnect_std_queue_arn" {
  description = "Reconnect synchronization SQS queue ARN"
  value       = aws_sqs_queue.sync_reconnect_std.arn
}

output "notification_dispatch_std_queue_url" {
  description = "Notification dispatch SQS queue URL"
  value       = aws_sqs_queue.notification_dispatch_std.url
}

output "notification_dispatch_std_queue_arn" {
  description = "Notification dispatch SQS queue ARN"
  value       = aws_sqs_queue.notification_dispatch_std.arn
}