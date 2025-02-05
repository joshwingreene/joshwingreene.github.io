---
title: Fresno Transit Free
date: 2014-08-01 8:30 pm
description: A mobile bus schedule for the riders of the Fresno Area Express
team:
    - Peggy Bounyarith
    - Vanida Bounyarith
    - Homer Greene Jr
    - Joshwin Greene
tools:
    - Adobe Photoshop & Illustrator
    - Precursor
    - Cacoo
    - POP
    - Pencil & Paper
role:
    - Lead Designer (post-concept)
    - Android & iOS Developer
    - General Project Manager
    - Copywriter & Co-Presenter
    - Graphic Artist Liaison
duration: Aug 2011 - April 2014 (launched in April)
cover-image: fresno-transit-free-preview.png
hover-image: fresno-transit-free-preview-hover.png
---
## Introduction

### Background

This project began as a class project of my Advanced Programming Applications class during the summer of 2011 at my community college.

The premise of our project was the following:

> Create a prototype Android application that would serve the students of Fresno City College (FCC) that utilize the Fresno Area Express (FAX) bus system

The underlying idea behind the application was that in a world where we have smartphones, why do bus riders need to use a paper bus schedule or access the schedule from the local transit agency’s website when that experience is cumbersome or needlessly uses data that bus riders could use for something else? At the end of the day, we wanted to create an app that served as a digital bus schedule, but which also served as a less convulted alternative when compared to the schedule on FAX’s website and their printed bus schedule. In the future, we eventually wanted to add a real-time feed.

One of the great things about this project was that we were able to get the assistance of the IT Director at FAX, who was very supportive of our project and helped us set up multiple meeting with FAX.

We were given six weeks to develop the application and the final result ended up having the following features:
- **Display Routes:** Shows a map that displays the bus routes around FCC and their respective bus stops
- **Destination:** Opens Google Maps with either the browser or Google Maps if the user has that application installed
- **Bus Schedule:** Displays the arrival times of all of the major bus stops that are served by FAX

When it came to my role for this project, I served as the team leader after being selected for that position at our first weekly meeting. Besides serving as one of the developers, I was tasked with preparing agendas, facilitating meetings, delegating tasks when necessary, and guiding and coordinating team activities.

:::image-grid

::image{src="../../images/fresno-transit-free/initial-1.png" label="Dashboard"}
::image{src="../../images/fresno-transit-free/initial-2.png" label="Display Routes"}
::image{src="../../images/fresno-transit-free/initial-3.png" label="Google Maps"}
::image{src="../../images/fresno-transit-free/initial-4.png" label="Bus Schedule - Route Picker"}
::image{src="../../images/fresno-transit-free/initial-5.png" label="Bus Schedule"}

:::

### The Challenge - Post Class Project

After the class ended, a student development team was formed from those in the team that wanted to continue to work on the application and solve a problem in our local community. Instead of only focusing on students, we challenged ourselves to build a transit application for all of the bus riders in Fresno.

When it came to my role, I continued to serve in a leading capacity by preparing agendas and coordinating / facilitating meetings while serving as a developer with Peggy and Vanida.

The team was called ScholarDev and here was our mission statement:

> “Our mission is to express our active citizenship of making a difference in our communities by providing technology that makes lives and transportation easier for everyone.” - ScholarDev

We would eventually incorporate in August of 2012. Under the name of [ScholarDev LLC](http://scholardevapps.com/) we would specialize in the development of mobile applications. Based on my leadership contributions up to this point, I was recognized as being the General Project Manager for the company and for our first project, which became known as Fresno Transit Free.

![[../../images/fresno-transit-free/scholardev-logo.png]]

## Addition / Research

### Sonar Feature

One of the first features that was added after the class ended was a sonar feature. As the name implies, this feature would allow users to be able to find bus stops within a certain radius from their current location.The user would be able to pick a stop and then hone in on the stop as they walked towards it. The sonar feature would then tell in intervals how many feet/miles they were away from a particular stop. This feature was also known as the Nearby Stops feature.

:::image-grid

::image{src="../../images/fresno-transit-free/sonar-1.png" label="Default State"}
::image{src="../../images/fresno-transit-free/sonar-2.png" label="Nearby Stops Shown"}
::image{src="../../images/fresno-transit-free/sonar-3.png" label="Stop Selected and User Moves Towards It"}

:::

### Research Effort

One of the great things about our team was that two of our developers had a lot of experience using FAX. However, this didn’t mean that we didn’t want more feedback.

So, in order to get some user feedback on some features that we were thinking of adding and some other details, we decided to put a survey together. After doing so, we decided to present to the Associated Student Government (ASG) at FCC. They agreed to include our survey into their Town Hall survey that would be emailed to all of the students at FCC.

Out of the 21,000 students at FCC in 2011, 910 took the survey. Here were the results (questions were optional):
- Out of 910 students, 55.6% stated that they were interested in a mobile bus app.
- Out of 500 students, 81% stated that they would like to see safety and other information from FAX within the app.
- Out of 499 students, 92.6% stated that they would be interested in a real-time feed.
- Out of 491 students, 66.2% wanted the app for Android whereas 66.4% wanted the app for iPhone (question supported multiple answers)

With these results in hand, it reaffirmed the demand for the real-time feed. It also validated the need for an information feature and that the app needed to support both Android and iOS.

## Iterations

### Redesign

By the end of 2011, we were looking to improve the app’s interface. Peggy and I volunteered to work on this task. After researching the Android design patterns at the time, I learned about the action bar and the dashboard navigation pattern, which is now called the six-pack by Google. I saw the combination of these two concepts as being a great way to make the app more streamlined and comfortable for the user. One of the apps that I was inspired by was the first iteration of Google’s Google+ app for Android.

After translating my ideas into wireframes, I proposed the use of the action bar and dashboard navigation pattern to the rest of ScholarDev. Here were my wireframes:

![[../../images/fresno-transit-free/original-redesign.jpg]]

After giving everyone some time to get a feel for the proposed navigation pattern, my proposal was approved. From that point on, I started to lead the improvements that were made to the app’s user experience and user interface.

I implemented the action bar and new navigation pattern using some Java files that I found online. One that would allow me to show the feature icons in a grid and another that would show an action bar (now called a toolbar) at the top of the application.

:::image-grid

::image{src="../../images/fresno-transit-free/redesign-a.png" label="Dashboard"}
::image{src="../../images/fresno-transit-free/redesign-b.png" label="Bus Schedule"}

:::

### Favorites Feature

After the new navigation pattern was implemented, I proposed the creation of the favorites feature. Since the main use of the app would be to view the bus schedule or a specific bus route, I thought it would be a good idea if users were able to favorite their most used routes in order to quickly access scheduling and route information. This proposal was approved and I was assigned the task of designing and implementing the feature, which was completed in July of 2012.

:::image-grid

::image{src="../../images/fresno-transit-free/favorites-1.png" label="Dashboard"}
::image{src="../../images/fresno-transit-free/favorites-2.png" label="Favorites"}
::image{src="../../images/fresno-transit-free/favorites-3.png" label="Favorites (Item Expanded)"}

:::

**Note:** Ignore the line that is under the action bar on the dashboard. Additionally, these screenshots were taken after the changes to the frontend, which is discussed in the next subsection.

### Feature and Frontend Revisions

Since the core audience had been changed to all bus riders in Fresno, the Display Routes feature was changed so that it would display visual depictions of each route that FAX serves. In each image, the user would be able to see a route’s stops and corresponding streets. We used the same images that were available on FAX’s website. (this would eventually be approved by FAX)

In the middle of 2012, I had heard about the [ActionBarSherlock](http://actionbarsherlock.com/) library and thought that besides improving the overall look of the app, it would also give us a more standard foundation when it came to supporting Android’s action bar functionality. So, after bringing this up to the group, I volunteered to recreate the application’s frontend using this library.

Around this time, I also suggested that we move the Destination feature to the dashboard’s action bar so that it would function as an action item since this feature was more of a secondary action. After this suggestion was approved, I went ahead and implemented the change.

In September, we decided to put the Sonar / Nearby Stops feature on hold once we realized that supporting this feature would not be cost-effective if we were going to make this application a free app with advertising. So, in its place, we decided to replace it with the Information feature that we were planning on adding to the app based on the results of the aforementioned Associated Student Government (ASG) survey.

:::image-grid

::image{src="../../images/fresno-transit-free/frontend-1.png" label="Dashboard"}
::image{src="../../images/fresno-transit-free/frontend-2a.png" label="Route List (used by Display Routes and Bus Schedule)"}
::image{src="../../images/fresno-transit-free/frontend-2b.png" label="Display Routes"}
::image{src="../../images/fresno-transit-free/frontend-3a.png" label="Information (Item List)"}
::image{src="../../images/fresno-transit-free/frontend-3b.png" label="Information (Item Opened)"}
::image{src="../../images/fresno-transit-free/frontend-4.png" label="Bus Schedule"}

:::

In the beginning of 2013, we started to have people try out the app and see what they thought of it. One criticism that was brought to our attention was how the action items for the bus schedule feature were unclear.

:::image-grid

::image{src="../../images/fresno-transit-free/first-action-items.png" label="Initial Action Items"}

:::

In the image above, you will see a B and D on the top right side of the bus schedule feature. When browsing arrival times, a user would press the “B" in order to change bounds whereas they would press the “D" in order to change the day type, i.e. weekday or weekends.

I volunteered to fix this issue since I was the one that designed the action items for this feature. Based on the design guidelines at the time, it made sense to make use of icons instead of letters. So, I first looked for action-item-ready icons that were the most relevant for their individual use cases. It was easy to find an icon for changing the day type. However, I couldn’t find an icon that matched the change bound function. Since I was taking an Adobe Illustrator class at the time, I decided to create the icon myself. After deliberating on how to make the icon more pronounced, the final version was selected after I created two revised versions of the icon.

:::image-grid

::image{src="../../images/fresno-transit-free/revised-action-items.png" label="Revised Action Items (same order)"}

:::

Around this time, based on some design articles that I had been reading, I suggested that we fine-tune the dashboard by making its central buttons give feedback to the user when they navigated to a major part of the app. This meant that each dashboard button would have the following states: normal, focused, and pressed. By making this change, it gave the user the sense that the app was quick in responding to their inputs.

Besides making this improvement, I also fine-tuned the user interface of the bus schedule feature and led discussions that pertained to choosing the app’s color scheme.

### Graphic Artist Competition

Since we were nearing release, we knew that we needed to do something about the temporary icons that were being used for the dashboard buttons. We decided to find a graphic artist who could design the dashboard buttons for us. I had also read that Google was encouraging Android developers to design feature graphics that would be used for advertising purposes on their app’s store page. After bringing this idea back to the group, we decided to have the graphic artist create one of these as well.

In order to find a graphic artist who we could routinely work with, we decided to put a competition together. I led the management of it, wrote the design briefs, and provided relevant materials for the graphic artists to draw inspiration from. After conducting the competition, I would serve as the liaison to the [graphic artist](https://www.facebook.com/samantha.siakovichinshaw) who won the competition.

Here’s what the dashboard looked like after all of the dashboard icons had been created and finalized (and after some additional fine-tuning):

:::image-grid

::image{src="../../images/fresno-transit-free/finalized-dashboard-icons.png" label="Screenshot"}

:::

## 59DaysofCode 2013

### Developing the iOS Version

In February of 2013, we learned that there would be a 59 day long coding/business competition called 59DaysofCode in our hometown. We decided to enter the competition in order to develop the iOS version. If we had the time, we also planned on including a prototype of the real-time feed. The competition began on April 20th.

When it came to the design of the iOS version, my plan was to use the dashboard navigation pattern like the Android version. However, I was unsure if that was possible since the iPhone didn’t have an on-screen back button like Android phones. Based on iOS apps that I had used in the past, I thought that the use of a bottom tab bar would be necessary. However, once I learned that a back button would be shown by the app itself and that custom icons could be placed on the right hand side of the navigation bar, I realized that I had all of the tools to replicate the dashboard navigation pattern.

The key element is that a custom home button would be placed on the right hand side of the navigation bar if the user was two screens down whilst using the application. This applied to the following features: Display Routes, Information, and the Bus Schedule. Here are my wireframes, which I used to create a [POP](https://marvelapp.com/pop/) prototype:

![[../../images/fresno-transit-free/ios-wireframes.jpg]]

During the competition, I designed and implemented the Favorites feature, led additions that were related to fine-tuning the user interface and making it consistent with the Android version, debugged every feature, and designed and created various marketing materials.

By the end of the competition, we had completed the application and were able to include the live feed prototype. We showed off our app at the showcase in June. As a personal note, this event is where it really hit me that software could positively impact people’s lives. It was great to continually get positive feedback from bus riders that said that our project would be a great asset for their daily commutes.

![[../../images/about/59DOC_award.JPG]]

We ended up tieing with another competitor for People’s Choice!

:::image-grid

::image{src="../../images/fresno-transit-free/ios-v1-1.png" label="Dashboard"}
::image{src="../../images/fresno-transit-free/ios-v1-2b.png" label="Display Routes"}
::image{src="../../images/fresno-transit-free/ios-v1-3a.png" label="Information (Item List)"}
::image{src="../../images/fresno-transit-free/ios-v1-3b.png" label="Information (Item Opened)"}
::image{src="../../images/fresno-transit-free/ios-v1-4b.png" label="Bus Schedule"}
::image{src="../../images/fresno-transit-free/ios-v1-5a.png" label="Favorites"}
::image{src="../../images/fresno-transit-free/ios-v1-6.png" label="Real-Time Feed Prototype"}

:::

## The Home Stretch

### iOS 7

In August of 2013, I learned that iOS 7 would be released in September. After reading some articles pertaining to how developers should taken advantage of it and not get left behind, I consulted with one of my business partners about postponing our app’s launch as it made sense from a development and marketing perspective. It didn’t make sense to launch the app and then have to update the frontend of the iOS version immediately afterwards to look up-to-date with Apple’s transition to flat or non-skeumorphic design.

So, after getting my business partner’s approval, I brought this idea back to the rest of my business partners. After much deliberation, we decided to push back the release date of our app so that we could update the iOS version to iOS 7 and release both versions at the same time.

:::image-grid

::image{src="../../images/fresno-transit-free/ios7-preview-1.jpeg" label="Dashboard"}
::image{src="../../images/fresno-transit-free/ios7-preview-2.jpeg" label="Bus Schedule"}
::image{src="../../images/fresno-transit-free/ios7-preview-3.jpeg" label="Display Routes"}

:::

While nearing release, I proposed that we improve the reading experience of the Information feature. What this meant is that instead of just showing unstylized text, we would bold text where it made sense. By doing this, I believed that it would tell people that we truly cared about the user's experience. I implemented these changes on both platforms.

:::image-grid

::image{src="../../images/fresno-transit-free/ios7-info-feature-change-preview.png" label="Screenshot"}

:::

## The Outcome

### Release

While coordinating with FAX, we released the app in April of 2014 for both [Android](https://play.google.com/store/apps/details?id=com.scholardevapps.fresno_transit_free) and [iOS](https://itunes.apple.com/us/app/fresno-transit-free/id824275381?mt=8).

[Press Release](https://drive.google.com/file/d/0B1fSFF_jwrjLTnlvWWRYZ2dhVmc/view?usp=sharing)

[Landing Page](http://scholardevapps.com/apps/fresno-transit-free.html)

**As of 2016, the Android version has been downloaded more than 15,000 times on Google Play, with a 4/5 star rating.**

Features:
- **Bus Schedule:** Arrival times for every stop that is served by FAX
- **Display Routes:** Depictions of each route that FAX serves
- **Information:** Information related to riding FAX, such as fare and transfer information
- **Favorites:** Allows riders to save their most used routes for quick access
- Quick Access to Google Maps

![[../../images/fresno-transit-free/bus-placard.png]]

