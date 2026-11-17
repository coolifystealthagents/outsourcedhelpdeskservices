/* 2026-11-16 Reduced batch: 5 blog + 5 research. */
export const november16BlogArticles = [
  {
    "slug": "outsourcedhelpdeskservices-handle-a-refund-request-that-crosses-two-billing-systems",
    "title": "Handle a refund request that crosses two billing systems",
    "excerpt": "A practical sequence for tracing a refund that spans two ledgers, naming the owner, and closing only when both records agree.",
    "service": "helpdesk-operations",
    "minutes": 8,
    "published": "2026-11-16",
    "sources": [
      {
        "name": "FTC billing and payments guidance",
        "url": "https://www.ftc.gov/business-guidance/payments-billing"
      },
      {
        "name": "NIST SP 800-53 Rev. 5 security and privacy controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      },
      {
        "name": "ISO 10002:2018 complaints handling",
        "url": "https://www.iso.org/standard/71536.html"
      }
    ],
    "body": [
      "## Map the two systems before you promise anything",
      "Start by naming both systems and the person who can see each one. A refund that crosses two billing platforms usually has one ledger for the original charge and another for the credit. Write the system names, the account identifiers, and the access each owner holds before you reply to the customer. The map takes ten minutes and prevents a promise that neither system can keep.",
      "A refund request often arrives as a screenshot of one ledger, which makes the other side invisible. Ask the customer for the charge date, the amount, and the last four digits rather than a full statement. Then check whether the two systems share a customer key or use separate billing identifiers. If the keys do not match, resolve the mapping before anyone touches the refund.",
      "## Confirm which system owns the credit",
      "Only one system should issue the credit, even when the charge appears in both. Decide which ledger holds the original transaction and which one merely mirrors it. Record the decision and the reason in the ticket so the next agent does not issue a second credit. A refund approved in both systems is a duplicate payment waiting to happen.",
      "If the two systems disagree about the amount, compare the settled amount rather than the authorized amount. Pending authorizations can look like charges and confuse the customer. Use the settlement record as the source of truth and note the difference in plain language. The customer should know which figure will change, by how much, and when it will post.",
      "## Write the note the second system needs",
      "The second system needs a reference it can match, not a copy of the whole conversation. Include the charge date, the settled amount, the customer key, and the ticket number from the first system. State which credit has already been issued and which one is still pending. A short, exact note prevents the second team from starting a parallel refund.",
      "Ask the receiving team to acknowledge the note before the customer is told the refund is complete. An acknowledgement is not a courtesy, because it is the evidence that the work moved. If the second system rejects the reference, record the rejection and reopen the first ticket. The customer should never receive a completion message while one ledger still disagrees.",
      "## Handle the customer who has already been charged twice",
      "A duplicate charge may come from the two systems rather than from two refunds. Compare the timestamps before assuming the customer was billed twice. If the second entry is only a hold, explain the difference and give the release date. If it is a real charge, treat it as a new refund and keep it linked to the original case.",
      "Do not ask the customer to dispute both charges at once unless the bank requires it. A single dispute with a clear reference is easier to track than two open cases. Send the customer the case numbers and the amount under review. Keep the language factual, because a frightened customer often contacts the bank before the desk can finish.",
      "## Set a checkpoint before the refund posts",
      "A refund that crosses systems takes longer than one that stays in place. Set a checkpoint for the expected posting date and name the person who will check it. Put the checkpoint in the queue rather than in a personal reminder. If the date passes without a posting, the ticket should come back to an owner automatically.",
      "Tell the customer when the checkpoint falls and what will happen next. Avoid promising a bank posting date that the desk does not control. Offer to confirm the credit reference once the first system shows it. A customer who knows the schedule is less likely to open a second request.",
      "## Close only when both ledgers agree",
      "Close the case when the original charge and the credit appear in the expected systems. Capture the reference from each ledger and attach it to the ticket. If one ledger is read-only, record the export or screenshot with its timestamp. The evidence should let a later reviewer confirm the outcome without asking the bank.",
      "Review a sample of cross-system refunds each month and look for duplicates, missing references, and promises that outran the posting. Fix the note template when the same field is missing more than once. Share one good example with the team so the standard is concrete. A clean refund is quiet, documented, and easy to defend."
    ],
    "image": "/images/november-16/outsourcedhelpdeskservices-handle-a-refund-request-that-crosses-two-billing-systems.webp",
    "heroImage": "/images/november-16/outsourcedhelpdeskservices-handle-a-refund-request-that-crosses-two-billing-systems.webp",
    "_words": 957
  },
  {
    "slug": "outsourcedhelpdeskservices-set-a-knowledge-article-expiry-date-before-customers-see-it",
    "title": "Set a knowledge article expiry date before customers see it",
    "excerpt": "How to give published answers a review date, a named owner, and a safe fallback when the guidance lapses.",
    "service": "helpdesk-operations",
    "minutes": 8,
    "published": "2026-11-16",
    "sources": [
      {
        "name": "NIST SP 800-53 Rev. 5 security and privacy controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      },
      {
        "name": "ISO 9001:2015 quality management systems",
        "url": "https://www.iso.org/standard/62085.html"
      },
      {
        "name": "GSA customer experience guidance",
        "url": "https://www.gsa.gov/about-us/customer-experience"
      }
    ],
    "body": [
      "## Why an article needs an end date",
      "A knowledge article describes a product, a policy, or a workaround at one moment. The product changes, the policy is revised, and the workaround is replaced, but the article stays published. An expiry date turns that silent drift into a scheduled decision. The date does not have to be exact, but it has to exist.",
      "Without an end date, an old article looks as trustworthy as a current one. Agents copy the steps, customers follow them, and the first sign of trouble is a failed request. Add an expiry field to the article template and make it visible to the reviewer. A date that nobody sees is barely better than no date at all.",
      "## Choose the trigger that starts the clock",
      "Start the clock from the event that makes the article risky, not from the day it was written. A billing article should expire when the next rate change is scheduled. A workaround should expire when the vendor fix is released. A policy answer should expire at the review date named by the client.",
      "Some articles have no natural event, so use a fixed review interval instead. A twelve-month interval is common for stable process guidance and a ninety-day interval for fast-moving product detail. Record the reason beside the date so the next reviewer understands the choice. A date without a reason will be extended by habit.",
      "## Mark the owner and the review window",
      "Every article needs one owner who can confirm or retire it. The owner is usually the person who knows the source material, not the person who happened to write the page. Name the owner in the article record and give them a review window before the expiry date. The window should be long enough to check the source and short enough to act.",
      "Send the owner a reminder at the start of the window, not on the expiry date. The reminder should include the source link and the question the article answers. Ask for one of three outcomes: confirm, revise, or retire. A clear choice is easier to complete than an open request to review.",
      "## Handle an article that expires while the queue is busy",
      "A busy queue tempts the team to extend every expiry date without reading the article. That habit defeats the control and leaves stale guidance in place. Instead, give the owner a short fallback: hide the article from customer-facing search until it is reviewed. The internal copy can remain available to agents with a visible warning.",
      "If the article is the only answer for a common request, escalate the review rather than let it lapse quietly. Name a backup reviewer and a deadline for the decision. Tell the client which answers are under review so they are not surprised by a change. A controlled gap is safer than a confident wrong answer.",
      "## Tell agents what to use when the article lapses",
      "Agents need a next step when an article expires, because the queue does not pause for the review. Point them to the approved fallback, the escalation path, or the saved reply that asks for more time. Put that instruction in the expiry notice rather than in a separate policy page. An agent who has to search for the rule will improvise.",
      "Review a sample of tickets handled during the lapse and look for answers that drifted. If agents invented a workaround, capture it and send it to the owner as evidence. The lapse is also a test of whether the article was still needed. An article that nobody missed is a candidate for retirement.",
      "## Review expiry dates on a fixed cadence",
      "Once a month, list the articles that expired, the ones that were extended, and the ones that were retired. Look for owners who extend without reviewing and for articles that expire repeatedly. A repeated extension usually means the review interval is wrong or the owner is overloaded. Fix the cause instead of adding another reminder.",
      "Report the count to the client in plain language and name the decisions that came out of the review. Keep the retired articles in an archive so old tickets still make sense. Update the template when a new product or region changes the risk. The goal is a knowledge base that admits what it does not know."
    ],
    "image": "/images/november-16/outsourcedhelpdeskservices-set-a-knowledge-article-expiry-date-before-customers-see-it.webp",
    "heroImage": "/images/november-16/outsourcedhelpdeskservices-set-a-knowledge-article-expiry-date-before-customers-see-it.webp",
    "_words": 946
  },
  {
    "slug": "outsourcedhelpdeskservices-write-a-shift-turnover-note-for-an-outsourced-help-desk",
    "title": "Write a shift turnover note for an outsourced help desk",
    "excerpt": "A repeatable note shape that carries promises, decisions, and open work across a shift without turning into a diary.",
    "service": "helpdesk-operations",
    "minutes": 8,
    "published": "2026-11-16",
    "sources": [
      {
        "name": "BLS Occupational Outlook Handbook: customer service representatives",
        "url": "https://www.bls.gov/ooh/office-and-administrative-support/customer-service-representatives.htm"
      },
      {
        "name": "ISO 18295-1:2017 customer contact centres",
        "url": "https://www.iso.org/standard/70677.html"
      },
      {
        "name": "ISO 9001:2015 quality management systems",
        "url": "https://www.iso.org/standard/62085.html"
      }
    ],
    "body": [
      "## Start with what the next shift must not miss",
      "A turnover note is a handoff, not a diary. Start with the items that will fail if nobody acts before the next check. Name the customer, the promise, the deadline, and the next action in the first line. An agent should be able to read the top of the note and know what to do first.",
      "Leave out the routine work that the queue already tracks. A note that repeats every open ticket trains the next shift to skim. Keep the list to exceptions, commitments, and decisions that are not obvious from the ticket. If the list grows beyond a screen, the queue is carrying work that should be assigned.",
      "## Separate open work from background context",
      "Put open work in one block and background context in another. Open work has an owner, a next action, and a time. Background context explains a client preference, a recent change, or a trap that is not visible in the record. Mixing the two makes the urgent item hard to find.",
      "Mark each open item with the shift that owns it next. If an item belongs to another team, say so and name the contact. Do not list an item as open when it is waiting on the customer unless the wait itself needs a check. The next shift needs to know what it can move, not everything that exists.",
      "## Name the customer promises that cross the shift",
      "A promise made in one shift becomes a risk in the next. List every commitment with a time, even when the commitment is only to send an update. Include the channel the customer expects and the person who made the promise. The next agent should not have to reconstruct the commitment from a long thread.",
      "If a promise cannot be kept, say so in the note before the customer discovers it. Name the reason and the new time, and ask the next shift to confirm the change with the customer. A late promise that is explained is easier to recover than a silent miss. The note should make the recovery step obvious.",
      "## Record decisions the next agent might reverse",
      "Some decisions look arbitrary without the reasoning behind them. Record why an exception was approved, why a ticket was left open, and why a customer was moved to another channel. A short reason prevents the next agent from reopening a settled question. It also shows the client where authority sits.",
      "Keep the decision note factual and dated. Name the person who approved it and the source they used. If the decision is temporary, give it an expiry or a review point. A decision that cannot be explained in two lines is probably not ready to hand over. Add the approver's name and the review date so the next shift can confirm it.",
      "## Keep the note short enough to read at handover",
      "The note should fit in the time the next shift actually has. Write it in short lines with the action first and the context second. Use the same headings every day so the reader knows where to look. A predictable shape is more useful than elegant prose. Keep the summary and the detail in the same note so nothing is lost between them.",
      "If the note is long because the shift was difficult, separate the summary from the detail. Keep the summary at the top and link the detail to the tickets. The next agent can go deeper when the work requires it. A note that demands a long read will be postponed until it is too late.",
      "## Test the note with the person who takes over",
      "Ask the incoming agent to read the note and explain the first three actions without opening the queue. If they cannot, the note is missing a name, a time, or a decision. Fix the note before the handover ends rather than after a promise is missed. The test takes two minutes and catches most ambiguity.",
      "Once a week, review one turnover note with the team and ask what was unclear. Add the missing field to the template instead of relying on memory. Keep the best example as a reference for new agents. A turnover note improves when the team treats it as a shared tool."
    ],
    "image": "/images/november-16/outsourcedhelpdeskservices-write-a-shift-turnover-note-for-an-outsourced-help-desk.webp",
    "heroImage": "/images/november-16/outsourcedhelpdeskservices-write-a-shift-turnover-note-for-an-outsourced-help-desk.webp",
    "_words": 940
  },
  {
    "slug": "outsourcedhelpdeskservices-triage-a-voice-note-attached-to-a-support-ticket",
    "title": "Triage a voice note attached to a support ticket",
    "excerpt": "How to turn a customer recording into a usable ticket note without guessing, over-sharing, or losing the original request.",
    "service": "helpdesk-operations",
    "minutes": 8,
    "published": "2026-11-16",
    "sources": [
      {
        "name": "HHS HIPAA privacy rule",
        "url": "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html"
      },
      {
        "name": "FTC privacy and security guidance",
        "url": "https://www.ftc.gov/business-guidance/privacy-security"
      },
      {
        "name": "NIST SP 800-53 Rev. 5 security and privacy controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      }
    ],
    "body": [
      "## Decide whether the voice note needs a transcript",
      "A voice note is evidence, not a shortcut around the ticket record. Decide whether the desk needs a transcript, a summary, or both before the agent listens. A summary is enough for a simple request, while a transcript helps when the customer describes a sequence or a dispute. Record the choice so the next reader knows what was captured.",
      "If the customer speaks a language the desk does not support, do not rely on an automatic transcript alone. Route the file to a reviewer who can confirm the meaning and note the uncertainty. Keep the original audio with the ticket when policy allows. A summary that hides a translation gap is worse than a clear request for help.",
      "## Pull the facts before listening twice",
      "Read the ticket and the customer record before pressing play. Note the account, the product, and the request type so the audio has a frame. Listen once for the request and once for the details that change the route. Two focused listens are faster than repeated scrubbing through a long file.",
      "Write the facts as the customer stated them, not as you interpret them. Use their words for the problem and your words for the next action. Mark anything you could not hear clearly instead of filling the gap. The note should let a reader separate what was said from what the agent concluded.",
      "## Handle poor audio without guessing",
      "Background noise, a weak connection, and a speaker who moves away from the phone can hide the key detail. If the request is unclear, ask the customer to confirm it in writing before acting. Do not invent an account number or a date from a half-heard phrase. A short clarification is cheaper than a wrong refund or a wrong reset.",
      "When the audio fails completely, record the attempt and the time. Tell the customer what happened and offer a text channel or a callback. Keep the failed file attached so the record shows the desk tried. A transparent failure is easier to resolve than a silent guess. Offer a specific time for the callback so the customer has a reason to wait.",
      "## Protect the customer's voice as personal data",
      "A voice recording can identify a person even when the words are ordinary. Store it in the approved location and restrict access to the people who need it. Do not forward it to a personal device or paste it into a chat tool. The same retention rule that covers attachments should cover audio.",
      "Tell the customer when a call or note is recorded and how long it will be kept. If the customer declines, offer a written summary instead of pressuring them. Record the preference so the next agent does not ask again. Consent is part of the request, not a separate formality.",
      "## Route the request once the facts are clear",
      "Route on the facts, not on the length of the recording. A long note may describe a simple password reset, while a ten-second note may hide a security issue. Match the request to the same categories used for text tickets. Then assign the owner who can act on that category.",
      "If the voice note contains a threat, a safety concern, or a possible breach, stop the routine route. Escalate to the named owner and preserve the file as evidence. Do not summarise away the exact words that made the case serious. A serious case needs the original, not a paraphrase.",
      "## Record what the customer actually asked for",
      "End the note with one sentence that states the request in the customer's terms. Add the outcome the customer expects and the time they expect it. This sentence is what the next agent reads first when the queue is busy. It should be possible to act on it without replaying the audio.",
      "Review a sample of voice-note tickets each month and compare the summary with the request. Look for missing consent, unclear ownership, and facts that were guessed. Update the template when the same gap appears twice. The aim is a record that is shorter than the audio and more useful than a transcript."
    ],
    "image": "/images/november-16/outsourcedhelpdeskservices-triage-a-voice-note-attached-to-a-support-ticket.webp",
    "heroImage": "/images/november-16/outsourcedhelpdeskservices-triage-a-voice-note-attached-to-a-support-ticket.webp",
    "_words": 948
  },
  {
    "slug": "outsourcedhelpdeskservices-keep-a-client-escalation-matrix-current",
    "title": "Keep a client escalation matrix current",
    "excerpt": "A maintenance routine for triggers, contacts, and backups so an escalation path still works when it is needed.",
    "service": "helpdesk-operations",
    "minutes": 8,
    "published": "2026-11-16",
    "sources": [
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "name": "CISA Cybersecurity Performance Goals",
        "url": "https://www.cisa.gov/cybersecurity-performance-goals"
      },
      {
        "name": "ISO 18295-1:2017 customer contact centres",
        "url": "https://www.iso.org/standard/70677.html"
      }
    ],
    "body": [
      "## Treat the matrix as a living record",
      "An escalation matrix is a list of triggers, owners, and contact routes. It goes stale when a client changes a manager, a system, or a support hour. Treat it as a living record with a named owner and a review date. A matrix that is only checked during an incident is already out of date.",
      "Keep one approved copy and link every queue, saved reply, and runbook to it. Copies in personal notes and chat threads drift within weeks. When the approved copy changes, the old version should be easy to identify. A single source of truth is the only way the matrix stays usable.",
      "## Name the trigger for each escalation path",
      "A path should start with a condition an agent can recognize, such as a security report or a failed payment above a limit. Write the condition in plain language and give one example. Then name the owner, the backup, and the response time. An agent should not have to interpret a vague category during a live issue.",
      "Separate severity from urgency, because a serious issue can wait an hour while a minor issue blocks a launch. Give each path a clear priority and a reason. If two paths could apply, say which one wins. Ambiguity at the top of the matrix produces parallel escalations and confused customers.",
      "## Test the contacts before an incident",
      "A name in a matrix is not a working contact. Test the phone number, the email address, and the after-hours route on a quiet day. Record the date of the test and the person who answered. A matrix that has never been tested is a plan, not a control. Repeat the test when the client changes a contact or a support hour.",
      "Test the backup as well as the primary owner. The backup is the person who matters when the primary is on leave or unreachable. Confirm that the backup knows the role and has the access the path requires. An unreachable backup turns a minor delay into an incident. Record the backup's name in the matrix so the next agent can find it quickly.",
      "## Handle a matrix entry that fails",
      "When a contact fails, record what happened and who was reached instead. Do not quietly substitute a name that is not in the approved matrix. Escalate the matrix problem to its owner and set a date to fix it. The customer should hear one clear next step, not a story about internal contacts.",
      "If the failure caused a delay, tell the client in the next service review. Name the cause and the change that prevents a repeat. Keep the failed attempt in the record so the pattern is visible. A matrix improves when failures are treated as evidence rather than embarrassment. Keep the review note with the matrix so the change is easy to trace.",
      "## Reconcile the matrix after every client change",
      "Ask the client to confirm the matrix whenever a contact, system, or support hour changes. Add the confirmation to the onboarding and change-request checklists. Do not wait for the annual review to catch a new manager. A short confirmation at the moment of change is more reliable than a long review later.",
      "Compare the approved matrix with the contacts named in recent tickets. A ticket that escalated to someone outside the matrix is a signal that the record is incomplete. Update the matrix or correct the practice, then note which one changed. The comparison turns routine work into a check. Record the mismatch in writing and ask the client to confirm the correct contact.",
      "## Review the matrix on a fixed schedule",
      "Put a quarterly review on the calendar and give it an owner. Check every path, contact, and response time against the current client record. Remove entries that no longer apply instead of leaving them for safety. A short matrix that works is better than a long one nobody trusts. Remove any contact who has left the client team, even if the number still works.",
      "Keep a change log with the date, the change, and the person who confirmed it. A later reviewer should be able to see why a path changed without reading old emails. Share the current version with the client after each review. The matrix is current when both sides can name the same owner."
    ],
    "image": "/images/november-16/outsourcedhelpdeskservices-keep-a-client-escalation-matrix-current.webp",
    "heroImage": "/images/november-16/outsourcedhelpdeskservices-keep-a-client-escalation-matrix-current.webp",
    "_words": 953
  }
];

export const november16ResearchArticles = [
  {
    "slug": "outsourcedhelpdeskservices-sla-pause-accounting-and-excluded-time-in-outsourced-support",
    "title": "SLA pause accounting and excluded time in outsourced support",
    "excerpt": "How pause rules and excluded time change what a service target can show, and how to report the customer's real wait.",
    "body": [
      "## Question and scope",
      "This review asks how pause time and excluded time change what a service-level measure can support in an outsourced help desk. The population is ticket queues with a written service target and a status model that stops the clock. The unit is one ticket with at least one pause interval during a declared observation window. The question matters because a target that excludes time can look healthy while the customer is still waiting.",
      "The scope excludes targets based only on first response and excludes queues with no recorded status history. It also excludes time spent in a client-owned system that the desk cannot observe. Those boundaries keep the review on pauses the desk can document. A finding should help a reader compare reported performance with the customer experience.",
      "## What a pause actually measures",
      "A pause records that the desk was not expected to act, not that the customer stopped waiting. The clock may stop when the ticket waits on the customer, a vendor, or an approval. The customer continues to experience elapsed time even when the service target does not. A report that shows only active time hides that difference.",
      "Pause reasons are not equivalent. Waiting for a customer reply is different from waiting for a client engineer who has not responded. Waiting for a scheduled maintenance window is different from waiting for an approval that nobody owns. Grouping all pauses under one label removes the information a manager needs.",
      "## Counting rules for excluded time",
      "Write the start event, stop event, and rounding rule for each pause reason before extracting data. A pause that starts when an agent changes a status is not the same as one that starts when a message is sent. Record which clock the tool uses, because the queue clock and the shift clock often disagree. Ambiguity in the rule becomes a difference in the reported result.",
      "Cap the pause at the point where the desk should have followed up. A ticket waiting on a customer for thirty days is not paused in any meaningful sense. Set a follow-up interval and count the time after it as active or as a separate aged state. The cap should be written into the target, not applied after the report looks bad.",
      "## Where pause evidence breaks down",
      "Status changes are often entered at the end of a shift rather than at the moment they happen. That delay moves time between active and paused without changing the work. An agent who clears several tickets at once can create a cluster of pauses that never existed. The record shows the entry time, not the real transition.",
      "Some tools overwrite the current status and keep no history. Without history, the desk cannot reconstruct how long a ticket waited or who moved it. Export the status log before a tool migration and test that the export includes the pause reason. A measure built on a field that is rewritten is not comparable across periods.",
      "## Reading pause ratios with case mix",
      "A high pause ratio can mean good discipline or a queue that depends on other teams. Compare the ratio within the same request type and the same client before drawing a conclusion. A billing queue that waits on approvals will look different from a password queue that rarely pauses. The mix explains more than the average.",
      "Look at the distribution, not only the mean. A few tickets with very long pauses can lift the ratio while most tickets move quickly. Report the median and the count of tickets above a threshold. The reader should see whether the pause is routine or concentrated in a small set.",
      "## Reporting pause time to the client",
      "Report active time, paused time, and total elapsed time as three separate figures. Name the pause reasons and the rule used to cap them. Show the customer-facing elapsed time even when the service target excludes it. A client who sees all three can judge the service rather than the formula.",
      "Explain any change in the pause rule before presenting a trend. A rule change can move the result without any change in the work. If the old rule was wrong, say so and restate the period where the data allows. A clear note protects the credibility of the current number.",
      "## Limits of the finding",
      "The review cannot measure the customer's actual wait when the ticket moves between channels. It also cannot recover transitions that the tool did not record. The result describes the pauses that were documented, not every pause that occurred. The desk should state that limit in the report. Report the channel change beside the wait figure so the reader can see the gap.",
      "The finding is affected by reviewer judgment when the pause reason is chosen from a list. Calibrate the list with examples and check a sample of entries. A reason that agents interpret differently cannot support a comparison. Record the calibration date beside the definition. Record the calibration date with the definition so a later reviewer can follow it.",
      "## Applying the review",
      "Take one month of tickets with pauses and extract the status history. Group the pauses by reason and compare the active, paused, and elapsed time. Read ten tickets with the longest pauses and look for missing follow-ups. The exercise should produce one rule to change, such as a cap or a follow-up interval.",
      "Apply the change for a month and report the same three figures. Compare the ratio within the same request type and note any change in case mix. The aim is a target that describes the customer experience without hiding the work. A modest, documented rule is better than a precise number with no history."
    ],
    "keyStats": [
      {
        "value": "3",
        "label": "time figures reported"
      },
      {
        "value": "1",
        "label": "pause rule per review"
      },
      {
        "value": "30",
        "label": "days before comparison"
      }
    ],
    "published": "2026-11-16",
    "sourceDate": "2026-11-16",
    "updated": "2026-11-16",
    "related": [
      "outsourcedhelpdeskservices-first-response-time-and-resolution-time-as-separate-queue-measures",
      "outsourcedhelpdeskservices-ticket-complexity-drift-and-tier-one-scope-creep",
      "outsourcedhelpdeskservices-escalation-volume-and-decision-latency-in-outsourced-support-queues"
    ],
    "sources": [
      {
        "name": "ISO 18295-1:2017 customer contact centres",
        "url": "https://www.iso.org/standard/70677.html",
        "note": "Contact-centre performance measurement guidance."
      },
      {
        "name": "Atlassian service-level agreement guide",
        "url": "https://www.atlassian.com/itsm/service-request-management/slas",
        "note": "Service target and measurement concepts."
      },
      {
        "name": "NIST SP 800-53 Rev. 5 security and privacy controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
        "note": "Audit and record-keeping control concepts."
      },
      {
        "name": "U.S. GAO Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g",
        "note": "Data reliability assessment guidance."
      }
    ],
    "hero": "/images/november-16/outsourcedhelpdeskservices-sla-pause-accounting-and-excluded-time-in-outsourced-support.webp",
    "_words": 1408
  },
  {
    "slug": "outsourcedhelpdeskservices-quality-reviewer-calibration-drift-in-outsourced-help-desks",
    "title": "Quality reviewer calibration drift in outsourced help desks",
    "excerpt": "How reviewer judgment moves over time, and how a fixed calibration set keeps a quality score comparable across months.",
    "body": [
      "## Question and scope",
      "This review asks how reviewer judgment drifts in a help desk quality program and what a calibration check can detect. The population is tier-one queues with a named reviewer and a scored ticket sample. The unit is one reviewed ticket that two reviewers assessed against the same standard. The question matters because a score is often treated as a fact about the agent rather than a judgment by a person.",
      "The scope excludes customer satisfaction surveys and excludes performance ratings used for pay. It also excludes reviews of tickets handled by the same reviewer who coached the agent, because that pairing changes the judgment. Those boundaries keep the review on the consistency of the assessment. A finding should help a program compare months without pretending the reviewer is neutral.",
      "## Why reviewer judgment drifts",
      "A reviewer develops habits after reading hundreds of tickets. They may stop counting a missing step that rarely causes harm or start weighting tone more heavily than evidence. The drift is gradual and usually invisible in a single review. It becomes visible only when the same ticket is scored twice.",
      "Drift also follows the sample. A month of difficult cases can make a reviewer stricter, while a month of simple cases can make the same reviewer lenient. The standard has not changed, but the reference point has. A calibration set anchors the reviewer to a fixed group of cases. Keep the case mix in the report so the reader can separate the sample from the standard.",
      "## Building a calibration set",
      "Select twenty to thirty tickets that cover the main request types and the known edge cases. Include at least one ticket with a missing source, one with a conflicting instruction, and one that was correctly closed without a fix. Remove names and account details, and keep the evidence that the standard refers to. The set should be small enough to score in one sitting.",
      "Write the expected assessment for each ticket with the reason, not only the score. The reason is what makes the calibration useful when two reviewers disagree. Review the set once a year and replace tickets that no longer reflect the work. A stale calibration set measures the past. Keep the expected reason beside the score so the next calibration can test it.",
      "## Measuring disagreement",
      "Compare the pass or fail call first, then compare the reason. A difference in reason can matter more than a difference in score, because it points to a different fix. Count the number of tickets where the reviewers disagree and describe the pattern. Do not average the scores into a single number that hides the disagreement.",
      "Distinguish a definition problem from an application problem. If reviewers read the same standard differently, the wording needs repair. If they read it the same way but apply it inconsistently, the coaching or the sample needs attention. Each cause leads to a different action. Write down which one occurred before changing the standard or the coaching plan.",
      "## Handling a reviewer who diverges",
      "Treat a divergent reviewer as a source of information before treating them as a problem. Ask which evidence they saw and which part of the standard they applied. A reviewer may be catching a real issue that the standard does not name. Update the standard when the observation is valid.",
      "If the divergence is an error, correct it with the same evidence the reviewer used. Do not simply tell them to match the majority. A reviewer who changes a call without understanding why will drift again. Record the resolution so the next calibration can check it. Record the corrected call and the evidence so the next session can confirm the change.",
      "## Calibration cadence and sample size",
      "Calibrate before the monthly review, not after the scores are published. A short session on the same set catches drift before it affects the report. Repeat the session when a new reviewer joins or a standard changes. The cadence should follow the risk, not the calendar alone. Keep the session notes with the monthly report so the decision is easy to audit.",
      "Keep the session short enough that reviewers read carefully. Twenty tickets discussed in an hour is better than sixty skimmed in the same time. Record the attendance and the tickets where the group changed its mind. The record shows whether the session produced a shared understanding. Stop the session when attention drops and schedule the rest for another day.",
      "## Limits of the finding",
      "The review cannot prove that a calibration set represents all work. It also cannot remove the reviewer's judgment from the score. The result describes agreement on a fixed set, not the truth about every ticket. The program should say so when it reports a quality figure. Report the limits and the sample size in one short paragraph beside the figure.",
      "The finding is affected by the order in which tickets are scored and by the time of day. A reviewer who scores difficult cases first may apply a different threshold later. Randomize the order and keep the session length stable. Record any change that could explain a shift. Keep the order random and the session length stable so the comparison holds.",
      "## Applying the review",
      "Run one calibration session with the current standard and count the disagreements by request type. Read the tickets where the reason differed and choose one definition to clarify. Update the standard and the example, then repeat the session with a fresh set. The exercise should produce one change, not a new scoring system.",
      "After a month, compare the new review results with the calibration set and note any remaining gap. Keep the session notes with the standard so a later reviewer can see the reasoning. The aim is a score that means the same thing in two months. Consistency is more valuable than precision."
    ],
    "keyStats": [
      {
        "value": "20",
        "label": "tickets in a calibration set"
      },
      {
        "value": "1",
        "label": "definition clarified per month"
      },
      {
        "value": "2",
        "label": "reviewers per comparison"
      }
    ],
    "published": "2026-11-16",
    "sourceDate": "2026-11-16",
    "updated": "2026-11-16",
    "related": [
      "outsourcedhelpdeskservices-agent-tenure-mix-and-quality-sample-stability",
      "outsourcedhelpdeskservices-why-qa-coaching-fades-after-the-review-meeting",
      "outsourcedhelpdeskservices-ticket-complexity-drift-and-tier-one-scope-creep"
    ],
    "sources": [
      {
        "name": "ISO 9001:2015 quality management systems",
        "url": "https://www.iso.org/standard/62085.html",
        "note": "Competence and process-review principles."
      },
      {
        "name": "ISO 18295-1:2017 customer contact centres",
        "url": "https://www.iso.org/standard/70677.html",
        "note": "Contact-centre quality measurement guidance."
      },
      {
        "name": "BLS Occupational Outlook Handbook: customer service representatives",
        "url": "https://www.bls.gov/ooh/office-and-administrative-support/customer-service-representatives.htm",
        "note": "Role context for support quality review."
      },
      {
        "name": "U.S. GAO Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g",
        "note": "Data reliability assessment guidance."
      }
    ],
    "hero": "/images/november-16/outsourcedhelpdeskservices-quality-reviewer-calibration-drift-in-outsourced-help-desks.webp",
    "_words": 1441
  },
  {
    "slug": "outsourcedhelpdeskservices-attachment-malware-screening-in-shared-support-inboxes",
    "title": "Attachment malware screening in shared support inboxes",
    "excerpt": "Where malicious files enter a support queue, which controls stop them before an agent opens one, and what evidence to keep.",
    "body": [
      "## Question and scope",
      "This review asks how malicious attachments reach a shared support inbox and which controls reduce the chance that an agent opens one. The population is customer-facing queues that accept files through email, a portal, or a chat tool. The unit is one inbound attachment and the screening step it passed before an agent opened it. The question matters because support staff are expected to open customer files quickly.",
      "The scope excludes code repositories and excludes files that arrive through a client's own ticketing system with its own scanning. It also excludes attachments that the desk never receives because the channel strips them. Those boundaries keep the review on the files an agent can actually open. A finding should help a desk add a control without blocking legitimate work.",
      "## How malicious attachments reach a desk",
      "An attacker can send an invoice, a screenshot, or a document that looks like a normal support request. The file may contain a link, a macro, or an executable disguised with a familiar extension. The request often creates urgency, such as a failed payment or a locked account. The urgency is part of the attack, because it discourages the agent from checking.",
      "A shared inbox also spreads the risk across shifts. One agent opens a file, the mailbox syncs, and the next agent sees a message that appears to come from a known thread. The file may arrive as a reply to a real ticket, which makes the context look trustworthy. Screening has to work before the file reaches the agent, not after.",
      "## Control points before an agent opens a file",
      "The first control is the channel: strip or quarantine executable file types at the gateway. The second is the client: confirm that the customer actually sent the file and expected the desk to open it. The third is the tool: open attachments in a sandbox or a protected viewer rather than on the agent workstation. Each control covers a different failure.",
      "A blocklist alone is not enough, because attackers change extensions and archive formats. Combine file-type rules with content inspection and a warning to the agent. Test the rules with benign examples so the desk knows what a blocked file looks like. A control that nobody has tested will fail at the wrong moment.",
      "## What safe-open practice requires",
      "Tell agents to verify the sender through a known channel before opening an unexpected file. The verification should use a contact from the customer record, not the reply address in the message. If the customer cannot be reached, hold the file and ask a supervisor. A short delay is cheaper than a compromised mailbox.",
      "Require agents to open files in the approved viewer and to disable macros and external links. If a file asks for credentials or a login, stop and escalate. Record the warning and the action taken so the next agent does not repeat the attempt. Safe-open practice is a sequence, not a single rule.",
      "## Evidence to keep when a file is blocked",
      "Keep the original file, the sender, the timestamp, and the rule that blocked it. Record the ticket and the customer contact so the case can be traced. Do not forward the file to a personal device or a chat tool for a second opinion. The evidence should stay in the approved system.",
      "Tell the customer that the file was blocked and what safe format to use instead. Offer an alternative such as a screenshot pasted into the portal or a document without macros. If the file is legitimate, log the exception and the approval. The record should show why the rule was waived.",
      "## Working with the client on screening rules",
      "The client owns the mailbox and often the security policy, while the desk operates the queue. Agree which file types are allowed, which are quarantined, and who can release a blocked file. Name the contact for a suspected malicious message and the time to respond. Without that agreement, agents improvise at the moment of risk.",
      "Review the rules when a new product or customer segment adds a file type. A construction desk may need plans and photos, while a billing desk may need only statements. Update the guidance before the first file arrives. The review should follow the work, not the calendar alone. Ask the client which formats their customers actually send before the rule changes.",
      "## Limits of the finding",
      "The review cannot prove that a screening rule will catch every malicious file. It also cannot measure how often agents bypass the rule when they are busy. The result describes the controls in place, not the absence of risk. The desk should avoid claiming that a queue is safe. Record the control gap and the date it was reviewed instead of assuming coverage.",
      "The evidence is limited by the tools, because some gateways log only the final action. Check what the log retains before relying on it for an investigation. A missing log entry is not proof that a control worked. The desk should state what it verified. Test the log with a known blocked file before an incident makes the gap urgent.",
      "## Applying the review",
      "Take twenty inbound attachments from the past month and trace each one from gateway to agent. Mark where the file was screened, who verified the sender, and whether the viewer was used. Choose one gap that appears more than once and fix the rule or the guidance. The exercise should produce a specific change.",
      "After a month, repeat the sample and compare the gaps. Pair the result with any blocked-file reports and the exceptions that were approved. The aim is a queue that can accept legitimate files without treating every customer as a suspect. A small, repeated check is more useful than a policy nobody follows."
    ],
    "keyStats": [
      {
        "value": "3",
        "label": "control points before opening"
      },
      {
        "value": "20",
        "label": "attachments per review"
      },
      {
        "value": "1",
        "label": "gap fixed per month"
      }
    ],
    "published": "2026-11-16",
    "sourceDate": "2026-11-16",
    "updated": "2026-11-16",
    "related": [
      "outsourcedhelpdeskservices-screenshot-retention-and-privacy-exposure-in-ticket-attachments",
      "outsourcedhelpdeskservices-handle-an-attachment-the-help-desk-cannot-open",
      "outsourcedhelpdeskservices-data-retention-choices-for-support-attachments"
    ],
    "sources": [
      {
        "name": "CISA Cybersecurity Performance Goals",
        "url": "https://www.cisa.gov/cybersecurity-performance-goals",
        "note": "Baseline cybersecurity practices for small and mid-size organizations."
      },
      {
        "name": "CISA StopRansomware Guide",
        "url": "https://www.cisa.gov/stopransomware/ransomware-guide",
        "note": "Guidance on preventing and responding to ransomware events."
      },
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework",
        "note": "Identify, protect, detect, and respond function concepts."
      },
      {
        "name": "FTC data breach response guide for business",
        "url": "https://www.ftc.gov/business-guidance/resources/data-breach-response-guide-business",
        "note": "Business guidance on responding to a data breach."
      }
    ],
    "hero": "/images/november-16/outsourcedhelpdeskservices-attachment-malware-screening-in-shared-support-inboxes.webp",
    "_words": 1433
  },
  {
    "slug": "outsourcedhelpdeskservices-ticket-complexity-drift-and-tier-one-scope-creep",
    "title": "Ticket complexity drift and tier-one scope creep",
    "excerpt": "How a queue absorbs work without a decision, the measures that expose the change, and how to rebalance ownership.",
    "body": [
      "## Question and scope",
      "This review asks how the mix of work in a tier-one queue changes over time and how that change affects service measures. The population is outsourced queues with a defined tier-one scope and a monthly report. The unit is one ticket classified by request type and by the steps needed to resolve it. The question matters because a queue can absorb new work without anyone deciding to add it.",
      "The scope excludes project work and excludes tickets that were escalated before any tier-one action. It also excludes requests that arrive through a channel the desk does not own. Those boundaries keep the review on the work the queue actually performs. A finding should help a manager see drift before it becomes a staffing problem.",
      "## How scope creep shows up in a queue",
      "Scope creep rarely arrives as a new policy. It arrives as a small request that the team handles to be helpful, then repeats. The ticket category may stay the same while the work inside it grows. A password reset that once took two steps may now include a device check and a follow-up call.",
      "Another sign is the exception that becomes routine. An approval that was once rare may appear on most tickets in a category. The queue still reports the same categories, but the effort behind them has changed. The report describes the label, not the work. Read ten of those tickets and note the step that turned the exception into routine.",
      "## Measures that reveal complexity drift",
      "Track the number of systems touched, the number of handoffs, and the number of steps per ticket. These counts grow before the resolution time does. Compare them within the same request type so a change in mix does not explain the result. A rise in steps is an early warning.",
      "Track the share of tickets that need an approval or a specialist review. A growing share means the queue is doing work that belongs to another tier. Report the share beside the volume so the reader sees the proportion. A stable volume can hide a large change in effort. Compare the share across two months before deciding that the queue has changed.",
      "## The cost of absorbing work silently",
      "When a queue absorbs work without a decision, the cost appears in backlog and turnover rather than in the budget. Agents spend more time on each ticket and have less time for the next one. The service target may still be met for a while because the team works harder. That buffer disappears when someone leaves.",
      "The client also loses visibility. They see a queue that looks healthy while the desk quietly carries work outside the agreement. When the desk finally raises the issue, the client may hear it as a request for more money rather than a scope problem. Early evidence makes the conversation factual.",
      "## Deciding what stays in tier one",
      "Define tier one by the decisions an agent can make, not by the ticket category alone. A reset that an agent can complete belongs in tier one, while a reset that needs an identity exception does not. Write the boundary with examples and review it when the product changes. A clear boundary is easier to defend than a list of tasks.",
      "When a new request appears, decide whether it is a temporary exception or a permanent addition. Give the decision a date and an owner, and record the effect on effort. A temporary exception should have an end date. Otherwise it becomes permanent by default. Write the decision in the scope note so agents can see which path applies.",
      "## Rebalancing without breaking promises",
      "Move work back to the right tier with a transition plan, not a sudden rule change. Tell the client which requests will change and when, and give agents a script for the first weeks. Keep the old path available for urgent cases during the transition. A hard cutover creates avoidable failures.",
      "Watch the receiving team for capacity before the work moves. A transfer that lands on an already full queue simply moves the backlog. Agree the volume and the response time in writing. The change should make ownership clearer, not create a new gap. Agree the handover volume and the receiving owner before the first ticket moves.",
      "## Limits of the finding",
      "The review cannot separate complexity from agent skill without a controlled comparison. It also cannot measure the work that never appears in a ticket, such as a quick answer in chat. The result describes the recorded steps, not the full effort. The desk should state that limit. Report the recorded steps as a lower bound rather than a full measure of effort.",
      "The finding is affected by category definitions and by the tool's step history. A category change can look like a complexity change when only the label moved. Check the taxonomy before comparing periods. Record the change in the report. Note the taxonomy change beside the trend so the reader can compare like with like.",
      "## Applying the review",
      "Take one month of tickets in a single category and count the systems, handoffs, and approvals per ticket. Compare the result with the same category three months earlier. Read ten tickets that grew and identify the added step. The exercise should produce one boundary to clarify. Read the tickets where the count rose and name the step that was added.",
      "Apply the boundary for a month and compare the counts again. Note any change in volume or mix before attributing the result to the new rule. The aim is a queue that knows what it owns. A clear scope is a service control, not an administrative preference. Keep the boundary note with the queue so the next reviewer can apply it."
    ],
    "keyStats": [
      {
        "value": "3",
        "label": "complexity measures tracked"
      },
      {
        "value": "1",
        "label": "boundary clarified per review"
      },
      {
        "value": "3",
        "label": "months in the comparison"
      }
    ],
    "published": "2026-11-16",
    "sourceDate": "2026-11-16",
    "updated": "2026-11-16",
    "related": [
      "outsourcedhelpdeskservices-sla-pause-accounting-and-excluded-time-in-outsourced-support",
      "outsourcedhelpdeskservices-escalation-volume-and-decision-latency-in-outsourced-support-queues",
      "outsourcedhelpdeskservices-taxonomy-changes-and-reporting-continuity-in-outsourced-desks"
    ],
    "sources": [
      {
        "name": "BLS Occupational Outlook Handbook: customer service representatives",
        "url": "https://www.bls.gov/ooh/office-and-administrative-support/customer-service-representatives.htm",
        "note": "Role and workforce context for support teams."
      },
      {
        "name": "ISO 18295-1:2017 customer contact centres",
        "url": "https://www.iso.org/standard/70677.html",
        "note": "Contact-centre performance measurement guidance."
      },
      {
        "name": "ISO 9001:2015 quality management systems",
        "url": "https://www.iso.org/standard/62085.html",
        "note": "Process control and review principles."
      },
      {
        "name": "Atlassian service-level agreement guide",
        "url": "https://www.atlassian.com/itsm/service-request-management/slas",
        "note": "Service target and ownership concepts."
      }
    ],
    "hero": "/images/november-16/outsourcedhelpdeskservices-ticket-complexity-drift-and-tier-one-scope-creep.webp",
    "_words": 1397
  },
  {
    "slug": "outsourcedhelpdeskservices-identity-verification-timing-and-support-abandonment",
    "title": "Identity verification timing and support abandonment",
    "excerpt": "How the order of verification steps affects whether customers finish a sensitive request, and how to measure what happens.",
    "body": [
      "## Question and scope",
      "This review asks how the timing of identity verification affects whether a customer completes a support request. The population is support queues that verify identity before a sensitive action such as a reset or a refund. The unit is one request that reached a verification challenge and the customer's next observable action. The question matters because a check placed too early can lose the customer before the desk understands the problem.",
      "The scope excludes verification performed entirely inside the client's product and excludes requests that never required a sensitive action. It also excludes customers who contacted support only to ask a general question. Those boundaries keep the review on the moment a check changes the path. A finding should help a desk place the check without weakening it.",
      "## Why verification timing changes behavior",
      "A customer who is asked to verify before describing the problem may abandon because the request feels harder than expected. A customer who explains the problem first may be more willing to verify because the agent has already shown understanding. The order changes the perceived cost of the interaction. It does not change the need for the check.",
      "The channel also matters. A chat customer can answer a challenge in the same window, while an email customer may leave and return hours later. A phone customer can be guided, but a long hold increases the chance of a hang-up. The timing has to fit the channel. Check the customer's preferred channel before choosing where to place the check.",
      "## Designing a verification sequence",
      "Start with the problem, then confirm the account, then verify the person before the sensitive action. This order lets the agent route the request and explain why the check is needed. It also avoids collecting identity data for a request that turns out to be general information. The sequence should be written into the saved reply and the agent script.",
      "Use the least intrusive check that meets the risk. A low-risk request may need only a confirmation sent to the account email, while a high-risk request may need a document or a callback. Do not apply the highest check to every request, because friction reduces completion. Match the check to the consequence.",
      "## Measuring abandonment after a challenge",
      "Define abandonment as a request that reaches the challenge and then shows no customer action for a stated period. Count the requests that completed, the ones that returned later, and the ones that never returned. Report the denominator beside the rate so the reader can judge the sample. A rate without a denominator is not actionable.",
      "Separate abandonment at the challenge from abandonment before it. A customer who leaves when asked for an order number has a different problem from one who leaves at a document upload. The distinction points to different fixes. Record the step where the request stopped. Record the exact step where the request stopped so the fix has a target.",
      "## Reducing friction without weakening the check",
      "Explain why the check is needed before asking for the data. A short reason increases the chance that the customer continues. Offer a channel that fits the customer, such as a callback or a secure upload. Do not ask for the same document twice. Put the reason in the saved reply so every agent uses the same wording.",
      "Fix the steps that cause avoidable failure, such as an upload that rejects a common file type or a code that expires too quickly. Test the flow on a phone and on a slow connection. A check that fails for technical reasons is not a security control. It is a barrier.",
      "## Reporting verification outcomes honestly",
      "Report completion, abandonment, and later return as separate figures. Avoid presenting the completion rate as a measure of customer satisfaction. A customer may complete the check and still be unhappy, or abandon and solve the problem elsewhere. The report should describe the flow, not the feeling. Keep the three figures in one table so the reader can see the whole flow.",
      "Note any change in the check, the channel, or the customer mix before comparing periods. A new document requirement can move the rate without any change in the queue. Explain the change and its date. A reader should not have to guess why the line moved. Write the change and its date in the report so the comparison stays honest.",
      "## Limits of the finding",
      "The review cannot know why a customer left, because the record ends when the customer stops responding. It also cannot see a customer who called back through another channel under a different ticket. The result describes observable behavior, not intent. The desk should say so. Ask a sample of customers why they stopped, and treat the answer as a separate finding.",
      "The finding is affected by the tool, because some channels do not record a challenge that was shown. Confirm what the log captures before counting. A missing entry may mean the check never appeared. The desk should test the log with a known case. Test the log with a known challenge before counting the outcomes for the month.",
      "## Applying the review",
      "Take one month of requests that reached a verification challenge and count the outcomes by step and channel. Read ten abandoned cases and look for a technical failure or a confusing instruction. Choose one change, such as moving the check after the problem statement. The exercise should produce a specific fix.",
      "Apply the change for a month and compare the outcomes with the earlier period. Note any change in the request mix or the check itself. The aim is a flow that verifies the right person without losing the customer first. A small, measured change is better than a broad redesign."
    ],
    "keyStats": [
      {
        "value": "3",
        "label": "outcomes counted separately"
      },
      {
        "value": "1",
        "label": "sequence change per review"
      },
      {
        "value": "10",
        "label": "abandoned cases read"
      }
    ],
    "published": "2026-11-16",
    "sourceDate": "2026-11-16",
    "updated": "2026-11-16",
    "related": [
      "outsourcedhelpdeskservices-password-reset-verification-failures-in-outsourced-support",
      "outsourcedhelpdeskservices-customer-channel-preference-and-resolution-confirmation-in-outsourced-support",
      "outsourcedhelpdeskservices-sla-pause-accounting-and-excluded-time-in-outsourced-support"
    ],
    "sources": [
      {
        "name": "NIST SP 800-63B digital identity guidelines",
        "url": "https://pages.nist.gov/800-63-3/sp800-63b.html",
        "note": "Authentication and identity proofing guidance."
      },
      {
        "name": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework",
        "note": "Privacy risk management concepts for identity data."
      },
      {
        "name": "FTC privacy and security guidance",
        "url": "https://www.ftc.gov/business-guidance/privacy-security",
        "note": "Business guidance on protecting customer information."
      },
      {
        "name": "GSA customer experience guidance",
        "url": "https://www.gsa.gov/about-us/customer-experience",
        "note": "Customer experience measurement guidance."
      }
    ],
    "hero": "/images/november-16/outsourcedhelpdeskservices-identity-verification-timing-and-support-abandonment.webp",
    "_words": 1395
  }
];
