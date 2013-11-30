#coding=utf-8
from RootApi.models import Wnewsinfo
class WnewsinfoDal(Wnewsinfo):
    class Meta:
        db_table = u'WNewsInfo'
    def countBtType(self,typeID):
        itemCount = Wnewsinfo.objects.filter(typeID=typeID).count()
        return itemCount

