# Post: Cedric Mail Access app information and privacy

**Date:** 2026-09-05
**Platform:** landing-page
**Section:** /cedric-mail and /cedric-mail/privacy
**Status:** Final candidate copy; publication and live verification belong to the parent controller.

## Final Published Text

### /cedric-mail

Skip to content

Dmytro Automation AI

Privately operated Gmail connector

Cedric Mail Access

Cedric Mail Access connects Gmail to a local assistant for tasks requested by its owner, such as finding selected messages, reading a thread or summarizing information.

It is privately operated by Dmytro for selected, owner-approved mailboxes on an operational allowlist. There is no public signup. Google's External OAuth audience setting does not restrict access to a private group; the operator is responsible for limiting use.

Permissions and owner control

Read email (gmail.readonly): access selected Gmail content needed for an owner-requested task.

Send email (gmail.send): a granted capability, not permission to send on its own. The initial delivery is read-only. Sending requires separate explicit owner authorization; there are no automatic or test sends.

The connector communicates with Gmail over HTTPS. It does not perform whole-mailbox synchronization. Selected task content may be processed by the configured AI service only under the privacy policy's no-training requirements.

Privacy and support

These public information pages do not collect or process Gmail data and contain no sign-in form, cookies, analytics or tracking scripts. They are not an OAuth callback or public mail-data endpoint.

Read the Cedric Mail Access privacy policy for data use, storage, retention and how to disconnect.

Contact Dmytro through the existing site contact section for support or a deletion request. Do not include passwords, OAuth tokens or email contents in a support request.

Privacy policy · Owner's website

### /cedric-mail/privacy

Skip to content

Cedric Mail Access

Privacy policy · Last updated September 5, 2026

Cedric Mail Access privacy policy

Cedric Mail Access is a local Gmail connector privately operated by Dmytro for selected, owner-approved mailboxes. There is no public signup. Access is limited through the operator's allowlist, not by Google's External OAuth audience setting.

Data accessed and why

The connector uses Google's Gmail API over HTTPS to carry out owner-requested mail tasks. Depending on the task and granted permissions, this can include selected message headers (sender, recipients, subject and date), bodies, attachments, and mailbox metadata or settings available under those permissions. It does not perform whole-mailbox sync.

The requested scopes are gmail.readonly and gmail.send. The initial CLI delivery only reads. Send capability may be used only with separate explicit owner authorization, never for automatic or test sends. Data is accessed only as necessary to provide the requested app functionality, not to build unrelated profiles.

AI processing and permitted use

Selected email content needed for a task may be sent to the configured AI service, currently OpenAI, for owner-requested inference such as summarization. OAuth tokens are never sent to an AI service.

AI processing is permitted only under configured no-training controls. The operator must verify those controls before any mailbox content is submitted. This policy states a requirement, not confirmation that account settings have already been verified.

We do not sell Gmail data, use it for advertising, or use it to develop, improve or train general-purpose AI or machine-learning models. Use and transfer of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements.

Storage, security and retention

OAuth tokens are stored in owner-restricted local files: readable and writable only by the local owner, inside an owner-only directory. Tokens are not published or included in AI prompts. File permissions are not a claim that data is encrypted at rest.

Selected content, downloaded attachments and task results may remain in local files or local assistant conversation history until the owner deletes them. There is no guaranteed automatic expiry.

AI provider retention follows the provider's published terms and applicable account settings; this policy makes no zero-retention guarantee. Google retains the source email separately under its own terms and account settings. Deleting local copies does not delete the original messages in Gmail or override a provider's retention rules.

Disconnect and delete

Stop the local connector to prevent further local tasks.

Remove Cedric Mail Access in Google Account connections to revoke its Google access.

Delete the local OAuth credentials, saved content, attachments and relevant assistant conversation history that you no longer want retained.

Stopping the connector or deleting local files does not automatically revoke Google's authorization. Revoking Google access does not automatically remove previously stored local content. Any provider-side data remains subject to that provider's deletion options and retention rules.

These public pages

The app information and privacy pages do not collect or process Gmail data. They have no JavaScript, analytics, tracking, cookies, external fonts, sign-in widget, OAuth callback or public mail-data endpoint. The website host may process ordinary web-request information to deliver these pages. Other pages on the owner's website have their own privacy policy.

Questions or deletion requests

Contact Dmytro through the existing site contact section for help with this app, disconnecting or deleting locally retained data. Do not send passwords, OAuth tokens or email contents through that contact route.

About Cedric Mail Access · Owner's website

## Style Notes

- Plain informational copy, not marketing or a public sign-up invitation.
- Names permissions and operational limits without exposing connected account identities or credentials.
- Distinguishes policy obligations from unverified live account settings.
- Uses the site's light background, navy text and blue links with system fonts; no scripts, trackers or external assets.
