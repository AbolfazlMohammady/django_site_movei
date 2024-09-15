from django.urls import path

from . import views

urlpatterns = [
    path('' , views.PostListView.as_view(), name='post-list'),
    path('<int:pk>/' , views.PostDtailView.as_view(), name='post-detail'),
    path('create/' , views.PostCreateView.as_view(), name='post-create'),
    path('<int:pk>/update/' , views.PostUpdateView.as_view(), name='post-update'),
    path('<int:pk>/delete/' , views.PostDeleteView.as_view(), name='post-delete'),
]

