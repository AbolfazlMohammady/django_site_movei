from django.contrib import admin
from django.urls import path, include

from blog.views import home

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name='home'),
    path('blog/', include('blog.urls')),
    path('account/', include('accounts.urls')),
    path('account/', include('django.contrib.auth.urls')),
]
