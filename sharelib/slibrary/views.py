from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from sharelib.serializers import ItemSerializer
from sharelib.models import Item
from django.db.models import Q


class JSONResponse(HttpResponse):
    """
    An HttpResponse that renders its content into JSON.
    """
    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponse, self).__init__(content, **kwargs)






class Posting(APIView):
    serializer_class = ItemSerializer


    def get_distance(self,loc1,loc2):


    def get(self,request,format=None):
        query =  Items.objects.filter(name__icontains=request.name,state=request.state)




    def post(self,request,format=None):



