from rest_framework import serializers
from models import Wnewsinfo

class WnewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wnewsinfo
        #fields = ('nid', 'title', 'code','content')
