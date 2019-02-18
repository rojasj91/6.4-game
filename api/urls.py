
from django.urls import path
from api.views import ApiViewSet

urlpatterns = [

  path('game/', ApiViewSet.as_view({'get': 'list', 'post': 'create'}))

]