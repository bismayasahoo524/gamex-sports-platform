import json
import os

from kafka import KafkaProducer


KAFKA_BOOTSTRAP_SERVERS = os.getenv(
    "KAFKA_BOOTSTRAP_SERVERS",
    "localhost:9092",
)


producer = KafkaProducer(
    bootstrap_servers=KAFKA_BOOTSTRAP_SERVERS,
    value_serializer=lambda value: json.dumps(value).encode("utf-8"),
)


def publish_notification(
    topic: str,
    message: dict,
):
    future = producer.send(
        topic,
        message,
    )

    producer.flush()

    return future.get(timeout=10)