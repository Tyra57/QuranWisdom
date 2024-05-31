from django.urls import path
#from translate_app import candy
from .views import (
    home, story, science, doa, faq, quiz ,about, delete_post, edit_comment, edit_post, edit_reply, contact_view, like_post, like_comment, like_reply,
    science1, science2, science3, science4, science5, science6, science7, science8, science9, science10, science11, science12, science13, 
    science14, science15, science16, science17, science18, science19, science20, science21, science22, science23, science24, science25,
    science26, science27, science28, science29, science30, science31, science32, science33, 
    story1, story2, story3, story4, story5, story6, story7, story8, story9, story10, story11, story12, story13, story14, story15, story16, story17, story18, story19,
    doa1, doa2, doa3, doa4, doa5, doa6, doa7, doa8, doa9, doa10, doa11, doa12, doa13, doa14,
    detail, posts, create_post, latest_posts, delete_comment, delete_reply, toggle_bookmark, 
    submit_quiz, view_results, profile, get_user_bookmarks, bookmark_detail_view, help)

urlpatterns = [
    path("", home, name="home"),
    path("help/", help, name="help"),
    path('get_user_bookmarks/', get_user_bookmarks, name='get_user_bookmarks'),
    path('bookmark/<slug:slug>/', bookmark_detail_view, name='bookmark_detail'),
    path('toggle_bookmark/<slug:slug>/', toggle_bookmark, name='toggle_bookmark'),
    path("a2-story/", story, name="story"),
    path("a3-science/", science, name="science"),
    path("a4-doa/", doa, name="doa"),
    path("a10-faq/", faq, name="faq"),
    path('contact/', contact_view, name='contact'),
    path("a5-quiz/", quiz, name="quiz"),
    path("a8-profile/", profile, name="profile"),
    path("a9-about/", about, name="about"),
    path('post/<int:post_id>/delete/', delete_post, name='post-delete'),
    path('edit_post/<int:post_id>/', edit_post, name='edit_post'),
    path('edit-comment/<int:comment_id>/', edit_comment, name='edit_comment'),
    path('edit_reply/<int:reply_id>/', edit_reply, name='edit_reply'),
    path('like/<int:post_id>/', like_post, name='like_post'),
    path('like-comment/<int:comment_id>/', like_comment, name='like_comment'),
    path('like-reply/<int:reply_id>/', like_reply, name='like_reply'),
    path('submit_quiz/', submit_quiz, name='submit_quiz'),
    path('results/', view_results, name='view_results'),
    path("a2-story1-barsisa/", story1, name="story1"),
    path("a2-story2-balqis/", story2, name="story2"),
    path("a2-story3-dwellers/", story3, name="story3"),
    path("a2-story4-dzulqarnain/", story4, name="story4"),
    path("a2-story5-gogmagog/", story5, name="story5"),
    path("a2-story6-harutmarut/", story6, name="story6"),
    path("a2-story7-habilqabil/", story7, name="story7"),
    path("a2-story8-moseskhadir/", story8, name="story8"),
    path("a2-story9-elephants/", story9, name="story9"),
    path("a2-story10-cave/", story10, name="story10"),
    path("a2-story11-peopleoftheditch/", story11, name="story11"),
    path("a2-story12-peoplegarden/", story12, name="story12"),
    path("a2-story13-luqman/", story13, name="story13"),
    path("a2-story14-qorun/", story14, name="story14"),
    path("a2-story15-saba/", story15, name="story15"),
    path("a2-story16-heifer/", story16, name="story16"),
    path("a2-story17-believerdisbeliever/", story17, name="story17"),
    path("a2-story18-sabbath/", story18, name="story18"),
    path("a2-story19-uzair/", story19, name="story19"),
    path("a3-science1-anemochory/", science1, name="science1"),
    path("a3-science2-celestialbodies/", science2, name="science2"),
    path("a3-science3-cloudlayers/", science3, name="science3"),
    path("a3-science4-constellationguide/", science4, name="science4"),
    path("a3-science5-difficultybreathing/", science5, name="science5"),
    path("a3-science6-embryology/", science6, name="science6"),
    path("a3-science7-honeyasacure/", science7, name="science7"),
    path("a3-science8-gender/", science8, name="science8"),
    path("a3-science9-livestock/", science9, name="science9"),
    path("a3-science10-mountains/", science10, name="science10"),
    path("a3-science11-ozonelayer/", science11, name="science11"),
    path("a3-science12-painreceptor/", science12, name="science12"),
    path("a3-science13-plantdiversity/", science13, name="science13"),
    path("a3-science14-landwater/", science14, name="science14"),
    path("a3-science15-roleofwind1/", science15, name="science15"),
    path("a3-science16-2seas/", science16, name="science16"),
    path("a3-science17-universecomplexity/", science17, name="science17"),
    path("a3-science18-blackholes/", science18, name="science18"),
    path("a3-science19-pairs/", science19, name="science19"),
    path("a3-science20-deepsea/", science20, name="science20"),
    path("a3-science21-dna/", science21, name="science21"),
    path("a3-science22-internalwaves/", science22, name="science22"),
    path("a3-science23-universexpansion/", science23, name="science23"),
    path("a3-science24-pyramid/", science24, name="science24"),
    path("a3-science25-originoflife/", science25, name="science25"),
    path("a3-science26-rainformation/", science26, name="science26"),
    path("a3-science27-brain/", science27, name="science27"),
    path("a3-science28-axis/", science28, name="science28"),
    path("a3-science29-7layers/", science29, name="science29"),
    path("a3-science30-orbits/", science30, name="science30"),
    path("a3-science31-sunmoon/", science31, name="science31"),
    path("a3-science32-bigbang/", science32, name="science32"),
    path("a3-science33-windrain/", science33, name="science33"),
    path("a4-doa1-children/", doa1, name="doa1"),
    path("a4-doa2-devotion/", doa2, name="doa2"),
    path("a4-doa3-guidance/", doa3, name="doa3"),
    path("a4-doa4-healing/", doa4, name="doa4"),
    path("a4-doa5-hereafter/", doa5, name="doa5"),
    path("a4-doa6-marriage/", doa6, name="doa6"),
    path("a4-doa7-mercy/", doa7, name="doa7"),
    path("a4-doa8-parents/", doa8, name="doa8"),
    path("a4-doa9-patience/", doa9, name="doa9"),
    path("a4-doa10-protection/", doa10, name="doa10"),
    path("a4-doa11-repentance/", doa11, name="doa11"),
    path("a4-doa12-righteouscompany/", doa12, name="doa12"),
    path("a4-doa13-sleeping/", doa13, name="doa13"),
    path("a4-doa14-strength/", doa14, name="doa14"),
    path("detail/<slug>/", detail, name="detail"),
    path("posts/<slug>/", posts, name="posts"),
    path("create_post/", create_post, name="create_post"),
    path("latest_posts", latest_posts, name="latest_posts"),
    path('comment/<int:comment_id>/delete/', delete_comment, name='comment-delete'),
    path('reply/<int:reply_id>/delete/',delete_reply, name='reply-delete'),
]