import json
import os

from kafka import KafkaConsumer


KAFKA_BOOTSTRAP_SERVERS = os.getenv(
    "KAFKA_BOOTSTRAP_SERVERS",
    "localhost:9092",
)


def create_consumer(
    topic: str,
    group_id: str,
):

    return KafkaConsumer(
        topic,
        bootstrap_servers=KAFKA_BOOTSTRAP_SERVERS,
        group_id=group_id,
        value_deserializer=lambda value: json.loads(
            value.decode("utf-8")
        ),
        auto_offset_reset="earliest",
        enable_auto_commit=True,
    )