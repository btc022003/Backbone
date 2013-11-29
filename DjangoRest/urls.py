from django.conf.urls import patterns, include, url

from RootApi.views import hello,get_one,get_all,get_all_data,test_put,get_one_data

from django.contrib import admin


# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
                       (r'^hello/(\w+)/$', hello),
                       (r'^get/(\w+)/$', get_one),
                       (r'^get_data/(\w+)/$', get_one_data),
                       (r'^all/$', get_all),
                       (r'^admin/', include(admin.site.urls)),
                       (r'^all_data/$', get_all_data),
                       (r'^put/$', test_put),
    # Examples:
    # url(r'^$', 'DjangoRest.views.home', name='home'),
    # url(r'^DjangoRest/', include('DjangoRest.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),

)
