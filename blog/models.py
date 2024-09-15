from django.db import models
from django.contrib.auth.models import  User
from django.urls import reverse

class Post(models.Model):
    POST_STATUS_DRAFT= 'D'
    POST_STATUS_PUBLISHED= 'P'

    POST_STATUS= [
        (POST_STATUS_DRAFT, 'Draft'),
        (POST_STATUS_PUBLISHED, 'Published')
 ]

    title= models.CharField(max_length=255)
    description= models.TextField()
    author= models.ForeignKey(User, on_delete=models.CASCADE)
    status= models.CharField(max_length=1, choices=POST_STATUS, default=POST_STATUS_DRAFT)
    datetime_created= models.DateTimeField(auto_now_add=True)
    datetime_modified= models.DateTimeField(auto_now=True)


    def __str__(self) -> str:
        return self.title

    def get_absolute_url(self):
        return reverse("post-detail", kwargs={"pk": self.pk})
    
