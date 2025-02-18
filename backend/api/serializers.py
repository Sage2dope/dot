from rest_framework import serializers
from .models import Contact


# Contact Serializer
class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['id', 'name', 'address', 'phone', 'created_at', 'updated_at']