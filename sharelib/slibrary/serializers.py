from slibrary.models import Item
from rest_framework import serializers



class ItemSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Item
        fields = ('url','name', 'address', 'zipcode','description','title','picture','state','date')

