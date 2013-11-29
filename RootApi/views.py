#coding=utf-8
# Create your views here.
from django.shortcuts import render_to_response
from django.http import HttpResponse
from RootApi.models import Wnewsinfo
import datetime
from serializers import WnewsSerializer
from StringIO import StringIO
from rest_framework.parsers import JSONParser
from rest_framework.parsers import FormParser
from rest_framework.renderers import UnicodeJSONRenderer
from django.template import RequestContext

'''
hello world .....  你懂的
'''
def hello(request, str="Tim"):
    #return HttpResponse("Hello World "+str+"!")
    now = datetime.datetime.now()
    return render_to_response('hello_view.html', {'name': str, "time": now})


'''
@nid 新闻id
根据id获取单条记录
'''
def get_one(request, nid):
    now = datetime.datetime.now()
    obj = Wnewsinfo.objects.get(nid=nid)
    #html = "<p>It's now {time}.I'm {name}</p>".format(time=now,name=obj.title)
    return render_to_response('hello_view.html', {'name': obj.title, "time": now},context_instance=RequestContext(request))


'''
获取全部列表数据 绑定到页面中
'''
def get_all(request):
    obj = Wnewsinfo.objects.all()
    return render_to_response("list_news.html", {'data': obj})


'''
获取全部列表数据 json形式
'''
def get_all_data(request):
    obj = Wnewsinfo.objects.all()

    serializer = WnewsSerializer(obj)
    #return HttpResponse(simplejson.dumps(serializer.data, ensure_ascii=False))
    return JSONResponse(serializer.data)




def test_put(request):
    #str = '{"title":"333","code":"123456789444"}'
    #stream = StringIO(str)
    #data = JSONParser().parse(stream)
    #serializer = WnewsSerializer(data=data)
    #serializer.save()
    #return JSONResponse(serializer.data)
    #######################
    #title = "测试python"
    #code = "123456789"
    #item = Wnewsinfo()
    #item.title = title
    #item.code = code
    #item.save()
    #serializer = WnewsSerializer(item)
    #return JSONResponse(serializer.data)
    if(request.method == "POST"):
        data = FormParser().parse(request)
        serializer = WnewsSerializer(data=data)
        return JSONResponse(serializer.data)
    else:
        return JSONResponse("参数错误")



class JSONResponse(HttpResponse):
    """
    An HttpResponse that renders it's content into JSON.
    """
    def __init__(self, data, **kwargs):
        content = UnicodeJSONRenderer().render(data)
        #kwargs['content_type'] = 'application/json'
        #kwargs['charset'] = 'utf-8'
        #super(JSONResponse, self).__init__(content, **kwargs)
        super(JSONResponse, self).__init__(content)


