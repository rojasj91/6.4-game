#
# from django.urls import path
# from . import views
#
#
#
# #urls.py with a route configured for / that will load the ChatIndex
#
# urlpatterns = [
#
#     path('', views.ChatIndex.as_view(),name='chat')



from django.contrib import admin
from django.urls import path
from . import views


app_name = "houses"

urlpatterns = [
    path('', views.IndexView.as_view(), name='welcome'),



]