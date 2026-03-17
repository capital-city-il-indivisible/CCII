## How to update the CCII website

How to update the CCII website in Github(Events)

IMPORTANT:
FIRST MAKE SURE YOU ARE ON THE WEBMASTERS BRANCH (see video)

Once you are on the webmasters branch:

1.  Go to the content folder
2.  Go to the webmaster-events directory

3.  Open the most recent event file

    NOTE: Each event lives in its own file. You don’t need to touch any site code outside the webmaster-events directory.

4.  Click an event file

5.  Click Edit (pencil icon)

6.  Copy the whole file

7.  Go back to the events/ folder

8.  Click Add file → Create new file

9.  Paste the copied content

10. Give the file a new name

    Example: 2026-03-15-meeting.md

11. Update the event details

    Example Event Details:

        title: Community Meeting
        date: 2026-03-15
        time: 2:00 PM
        location: Springfield Public Library

12. Click Commit changes
13. If the changes are successful, create a pull request(see linked video)

The website will update automatically within a minute or two.

For extra help watch a tutorial here -->
https://youtu.be/UWlykh9Byzw

----------------------NOTES:------------------
Do not try to change the existing events template. ONLY change text after colons.

--Keep dates in the format you find them. The code is looking for a specific format. DATES DO NOT HAVE QUOTATION MARKS.

--You can delete irrelevant fields (eg if there is no image feel free to delete the image field for the event).

-- You cannot add new fields or it will cause the site to crash (eg if you want to highlight the event speakers you cannot add "Speakers:" to the template. The code itself would need to be updated for this to work).

----------------FIELDS TEMPLATE:--------------------

Here are the fields you can currently add to any event.

---

Title: "any text (ex: Vigil)"
Date: YYYY-MM-DD (ex: 2026-03-24)
Location:"any text (ex: Lincoln statue)"
Zoom Link: 
    url: "any text (just paste a signup link url here)"
    text: "any text (ex: "Zoom link"or "Join Zoom meeting")" <--if left blank, defaults to "Join Zoom meeting"
Time: "any text"
Description: "any text (ex: Vigil for world peace)"
Image: image url (ex:../assets/images/event-img.png)
signup_link:
    url: "any text (just paste a signup link url here)"
    text: "any text (ex: "Sign up"or "Volunteer")" <--if left blank, defaults to "Sign up"

---
