from django.conf.urls import patterns, include, url
from django.contrib import admin
from rest_framework import viewsets, routers
admin.autodiscover()


urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'sharelib.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
