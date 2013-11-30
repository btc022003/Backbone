# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#     * Rearrange models' order
#     * Make sure each model has one field with primary_key=True
# Feel free to rename the models, but don't rename db_table values or field names.
#
# Also note: You'll have to insert the output of 'django-admin.py sqlcustom [appname]'
# into your database.

from django.db import models

class Wassets(models.Model):
    aid = models.IntegerField(primary_key=True, db_column=u'AID') # Field name made lowercase.
    code = models.CharField(max_length=200, db_column=u'Code', blank=True) # Field name made lowercase.
    assetsurls = models.TextField(db_column=u'AssetsUrls', blank=True) # Field name made lowercase. This field type is a guess.
    linkurl = models.CharField(max_length=500, db_column=u'LinkUrl', blank=True) # Field name made lowercase.
    isdefault = models.IntegerField(null=True, db_column=u'IsDefault', blank=True) # Field name made lowercase.
    typeval = models.CharField(max_length=200, db_column=u'TypeVal', blank=True) # Field name made lowercase.
    explain = models.TextField(db_column=u'Explain', blank=True) # Field name made lowercase. This field type is a guess.
    ordernum = models.IntegerField(null=True, db_column=u'OrderNum', blank=True) # Field name made lowercase.
    fid = models.IntegerField(null=True, db_column=u'FID', blank=True) # Field name made lowercase.
    ftype = models.CharField(max_length=200, db_column=u'FType', blank=True) # Field name made lowercase.
    remarks = models.TextField(db_column=u'Remarks', blank=True) # Field name made lowercase. This field type is a guess.
    state = models.IntegerField(null=True, db_column=u'State', blank=True) # Field name made lowercase.
    operatip = models.CharField(max_length=200, db_column=u'OperatIp', blank=True) # Field name made lowercase.
    operattime = models.DateField(null=True, db_column=u'OperatTime', blank=True) # Field name made lowercase.
    operattype = models.CharField(max_length=200, db_column=u'OperatType', blank=True) # Field name made lowercase.
    operator = models.CharField(max_length=200, db_column=u'Operator', blank=True) # Field name made lowercase.
    addtime = models.DateField(null=True, db_column=u'AddTime', blank=True) # Field name made lowercase.
    extendtxt = models.TextField(db_column=u'ExtendTxt', blank=True) # Field name made lowercase. This field type is a guess.
    extendtxt1 = models.TextField(db_column=u'ExtendTxt1', blank=True) # Field name made lowercase. This field type is a guess.
    extendtxt2 = models.TextField(db_column=u'ExtendTxt2', blank=True) # Field name made lowercase. This field type is a guess.
    extendtxt3 = models.TextField(db_column=u'ExtendTxt3', blank=True) # Field name made lowercase. This field type is a guess.
    extendtxt4 = models.TextField(db_column=u'ExtendTxt4', blank=True) # Field name made lowercase. This field type is a guess.
    class Meta:
        db_table = u'WAssets'

class Wnewsinfo(models.Model):
    nid = models.IntegerField(primary_key=True, db_column=u'NID') # Field name made lowercase.
    code = models.CharField(max_length=200, db_column=u'Code', blank=True) # Field name made lowercase.
    pcode = models.CharField(max_length=200, db_column=u'PCode', blank=True) # Field name made lowercase.
    typeid = models.CharField(max_length=200, db_column=u'TypeID', blank=True) # Field name made lowercase.
    title = models.CharField(max_length=200, db_column=u'Title', blank=True) # Field name made lowercase.
    entitle = models.CharField(max_length=200, db_column=u'EnTitle', blank=True) # Field name made lowercase.
    desc = models.TextField(db_column=u'Desc', blank=True) # Field name made lowercase. This field type is a guess.
    content = models.TextField(db_column=u'Content', blank=True) # Field name made lowercase. This field type is a guess.
    linkurl = models.CharField(max_length=500, db_column=u'LinkUrl', blank=True) # Field name made lowercase.
    price = models.CharField(max_length=200, db_column=u'Price', blank=True) # Field name made lowercase.
    remarks = models.TextField(db_column=u'Remarks', blank=True) # Field name made lowercase. This field type is a guess.
    istop = models.IntegerField(null=True, db_column=u'IsTop', blank=True) # Field name made lowercase.
    state = models.IntegerField(null=True, db_column=u'State', blank=True) # Field name made lowercase.
    ordernum = models.IntegerField(null=True, db_column=u'OrderNum', blank=True) # Field name made lowercase.
    operatip = models.CharField(max_length=200, db_column=u'OperatIp', blank=True) # Field name made lowercase.
    operattime = models.DateField(null=True, db_column=u'OperatTime', blank=True) # Field name made lowercase.
    operattype = models.CharField(max_length=200, db_column=u'OperatType', blank=True) # Field name made lowercase.
    operator = models.CharField(max_length=200, db_column=u'Operator', blank=True) # Field name made lowercase.
    addtime = models.DateField(null=True, db_column=u'AddTime', blank=True) # Field name made lowercase.
    extendtxt = models.TextField(db_column=u'ExtendTxt', blank=True) # Field name made lowercase. This field type is a guess.
    extendtxt1 = models.TextField(db_column=u'ExtendTxt1', blank=True) # Field name made lowercase. This field type is a guess.
    extendtxt2 = models.TextField(db_column=u'ExtendTxt2', blank=True) # Field name made lowercase. This field type is a guess.
    extendtxt3 = models.TextField(db_column=u'ExtendTxt3', blank=True) # Field name made lowercase. This field type is a guess.
    extendtxt4 = models.TextField(db_column=u'ExtendTxt4', blank=True) # Field name made lowercase. This field type is a guess.

    class Meta:
        db_table = u'WNewsInfo'



