from django.shortcuts import render
from django.views import generic
from django.urls import reverse_lazy
from django.contrib.auth.models import User

from .models import Post
from .forms import PostForm 


class PostListView(generic.ListView):
    template_name= 'blog/post_list.html'
    context_object_name= 'post_list'

    def get_queryset(self):
        return Post.objects.all().order_by('-datetime_modified')


class PostDtailView(generic.DetailView):
    model= Post
    template_name= 'blog/post_detail.html'
    context_object_name= 'post'


class PostCreateView(generic.CreateView):
    form_class= PostForm
    template_name= 'blog/post_create.html'
     

    def get_context_data(self, **kwargs):
        context=  super().get_context_data(**kwargs)
        context['users']= User.objects.all().values('id','username')
        return context


class PostUpdateView(generic.UpdateView):
    model= Post
    form_class= PostForm
    template_name= 'blog/post_create.html'


class PostDeleteView(generic.DeleteView):
    model=Post
    template_name= 'blog/post_delete.html'
    success_url= reverse_lazy('post-list')

def home(request):
    return render(request, 'blog/home.html')

