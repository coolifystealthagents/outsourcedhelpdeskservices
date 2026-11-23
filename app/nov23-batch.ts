/* 2026-11-23 Reduced batch: 5 blog + 5 research. */
export const november23BlogArticles = [
  {
    "slug": "outsourcedhelpdeskservices-write-a-shift-start-check-for-an-outsourced-help-desk-queue",
    "title": "Write a shift-start check for an outsourced help desk queue",
    "excerpt": "A shift-start check that reviews the queue, the overnight events, the waiting work, and the first action before the desk takes new contacts.",
    "service": "helpdesk-operations",
    "minutes": 8,
    "published": "2026-11-23",
    "sources": [
      {
        "name": "ISO 18295-1:2017 customer contact centres",
        "url": "https://www.iso.org/standard/70677.html"
      },
      {
        "name": "NIST SP 800-53 Rev. 5 security and privacy controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      },
      {
        "name": "NIST SP 800-92 Guide to Computer Security Log Management",
        "url": "https://csrc.nist.gov/pubs/sp/800/92/final"
      },
      {
        "name": "Microsoft Purview retention policies",
        "url": "https://learn.microsoft.com/en-us/purview/retention"
      }
    ],
    "body": [
      "## Start with the overnight state",
      "The first ten minutes of a shift decide how the rest of the day feels. Check the overnight queue, the incidents that opened, and the promises that are due. Record the state before taking a new contact. A desk that starts by answering the newest ticket may miss an older promise.",
      "Write the check as a short list that the incoming agent can complete without help. The list should name the systems and the owner. Keep it stable so the team can compare shifts. A different check every day is not a routine.",
      "## Review the queue and the age",
      "Look at the open tickets by age and priority, not only by count. A small queue with a few very old tickets is a different problem from a large fresh queue. Record the oldest urgent item and the next action. The shift lead should see the same picture.",
      "Check the unassigned items and the tickets that changed owner overnight. A ticket without an owner is likely to wait. Record the reassignment and the reason. The review should catch a handoff that did not complete.",
      "## Read the overnight events",
      "Review the incident log and the system status. A monitoring alert may have resolved without a ticket, or it may have produced a customer issue that is still open. Record the event and the follow-up. The desk should know what changed before it speaks to a customer.",
      "Check the vendor status pages and the maintenance calendar. A planned change may explain a spike in contacts. Record the change and the expected effect. The agent can then answer with context instead of surprise.",
      "## Confirm the promises",
      "List the promises made to customers, including the channel and the time. A promise to call back at nine is a deadline. Record the owner and the next update. The shift should not discover a missed promise from an angry caller.",
      "Check the service-level deadlines that fall inside the shift. Mark the close ones and the action required. Record the escalation contact. A ticket that breaches early in the shift needs attention before the queue grows.",
      "## Set the first action",
      "Give the shift one first action, such as calling the waiting customer or clearing the oldest urgent ticket. The action should reduce the biggest risk in the queue. A list of ten priorities is not a plan. Assign the follow-up to a named person before the review closes.",
      "Confirm the check with the outgoing and incoming agents. The confirmation should name the first action and any question. A check that is only read is not a handoff. Use the same definition next time so the comparison is fair."
    ],
    "image": "/images/november-23/outsourcedhelpdeskservices-write-a-shift-start-check-for-an-outsourced-help-desk-queue.webp",
    "heroImage": "/images/november-23/outsourcedhelpdeskservices-write-a-shift-start-check-for-an-outsourced-help-desk-queue.webp",
    "_words": 428
  },
  {
    "slug": "outsourcedhelpdeskservices-set-a-knowledge-article-retirement-rule-for-an-outsourced-desk",
    "title": "Set a knowledge article retirement rule for an outsourced desk",
    "excerpt": "A retirement rule that removes misleading articles, redirects links, and tells the agents what changed, so the knowledge base stays trustworthy.",
    "service": "helpdesk-operations",
    "minutes": 8,
    "published": "2026-11-23",
    "sources": [
      {
        "name": "ISO 18295-1:2017 customer contact centres",
        "url": "https://www.iso.org/standard/70677.html"
      },
      {
        "name": "NIST SP 800-53 Rev. 5 security and privacy controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      },
      {
        "name": "NIST SP 800-92 Guide to Computer Security Log Management",
        "url": "https://csrc.nist.gov/pubs/sp/800/92/final"
      },
      {
        "name": "Microsoft Purview retention policies",
        "url": "https://learn.microsoft.com/en-us/purview/retention"
      }
    ],
    "body": [
      "## Why retirement needs a rule",
      "A knowledge base grows by addition and decays by neglect. An article that was correct last year may now send an agent to the wrong screen or the wrong policy. Retirement is the other half of maintenance. A rule makes it a routine decision rather than a periodic purge.",
      "The rule should define who can retire an article, what evidence is required, and what happens to the links. A retirement without a redirect creates broken links and confused agents. The rule should be short enough to apply during a normal week. Review the item at the next monthly check and note any change.",
      "## Define the retirement triggers",
      "List the events that trigger a retirement review: a product change, a policy change, a repeated failure to resolve, or a replacement article. Record the trigger and the date. A trigger is easier to act on than a vague annual review. Use the same definition next time so the comparison is fair.",
      "Add a usage trigger for an article that is never opened or never linked. An unused article may be redundant or simply hard to find. Record the usage data and the decision. Do not retire an article only because the view count is low.",
      "## Check the evidence",
      "Before retiring, confirm that the article is wrong, replaced, or no longer needed. Record the source of the decision, such as a policy notice or a product change. A retirement based on one agent's opinion is a risk. Keep the language plain enough for a new agent to follow.",
      "Check the saved replies, the macros, and the training material that reference the article. A retired article that remains in a macro still reaches customers. Record the references and the owner who will update them. Check the record again after a change in owner or system.",
      "## Redirect and communicate",
      "Retire the article by removing it from search and redirecting the old link to the replacement. Record the redirect and the date. Tell the agents what changed and why. A silent deletion leaves the team guessing.",
      "If no replacement exists, write a short note that explains the gap and the next step. Record the owner and the date for the replacement. The agents should not be left with a dead end. Keep the evidence with the record rather than in a separate message.",
      "## Review the effect",
      "After the retirement, check the related tickets for confusion or repeated questions. Record the result. A retirement that increases contacts may have removed a useful article or failed to redirect the link. Assign the follow-up to a named person before the review closes.",
      "Review the retirement log each quarter. A pattern of articles retired without a replacement may point to a content planning gap. Fix one cause and measure the next quarter. Use the same definition next time so the comparison is fair."
    ],
    "image": "/images/november-23/outsourcedhelpdeskservices-set-a-knowledge-article-retirement-rule-for-an-outsourced-desk.webp",
    "heroImage": "/images/november-23/outsourcedhelpdeskservices-set-a-knowledge-article-retirement-rule-for-an-outsourced-desk.webp",
    "_words": 404
  },
  {
    "slug": "outsourcedhelpdeskservices-write-a-customer-update-for-a-long-running-ticket",
    "title": "Write a customer update for a long-running ticket",
    "excerpt": "A customer update for a long-running ticket that states the current position, the next step, the owner, and the time of the next update.",
    "service": "helpdesk-operations",
    "minutes": 8,
    "published": "2026-11-23",
    "sources": [
      {
        "name": "ISO 18295-1:2017 customer contact centres",
        "url": "https://www.iso.org/standard/70677.html"
      },
      {
        "name": "NIST SP 800-53 Rev. 5 security and privacy controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      },
      {
        "name": "NIST SP 800-92 Guide to Computer Security Log Management",
        "url": "https://csrc.nist.gov/pubs/sp/800/92/final"
      },
      {
        "name": "Microsoft Purview retention policies",
        "url": "https://learn.microsoft.com/en-us/purview/retention"
      }
    ],
    "body": [
      "## Acknowledge the wait",
      "A long-running ticket needs an update even when there is no resolution. The customer should hear what is happening, who owns the issue, and when the next update will arrive. An update that only says still working on it adds little. The message should respect the customer's time.",
      "Start with a short acknowledgement of the wait. Do not blame another team or a vendor. The customer cares about the outcome and the next step. Keep the tone factual and human.",
      "## State the current position",
      "Describe what is known and what is still being checked. Use plain language and avoid internal codes. If a fix is waiting on a vendor, say so and give the expected response. Record the source of the expectation.",
      "Do not promise a resolution time the desk cannot control. Give a time for the next update instead. A reliable update cadence is more useful than an optimistic promise. Note the gap in the report rather than filling it with an assumption.",
      "## Name the owner and the next step",
      "Tell the customer who owns the issue, even if the name is a role rather than a person. Record the next action and the date. A customer who knows who is working the issue is less likely to open a second ticket. Keep the language plain enough for a new agent to follow.",
      "If the next step depends on the customer, say exactly what is needed and by when. A request without a deadline tends to wait. Record the request and the follow-up. Check the record again after a change in owner or system.",
      "## Set the next update time",
      "Give a specific time for the next update, not a range that spans a day. Record the time and the channel. Put the update in the queue so the next shift can keep it. A promise of an update is a commitment.",
      "If the update time changes, tell the customer before it passes. A revised time is better than silence. Record the change and the reason. Keep the evidence with the record rather than in a separate message.",
      "## Close the loop",
      "When the issue is resolved, send a short closing message with the outcome and the prevention step if there is one. Record the resolution and the date. The customer should not have to ask whether the issue is closed. Assign the follow-up to a named person before the review closes.",
      "Review the long-running tickets each week for repeat causes. A ticket that keeps returning may need a product fix or a clearer process. Record the finding and the owner. Use the same definition next time so the comparison is fair."
    ],
    "image": "/images/november-23/outsourcedhelpdeskservices-write-a-customer-update-for-a-long-running-ticket.webp",
    "heroImage": "/images/november-23/outsourcedhelpdeskservices-write-a-customer-update-for-a-long-running-ticket.webp",
    "_words": 380
  },
  {
    "slug": "outsourcedhelpdeskservices-handle-a-ticket-that-arrives-with-a-screenshot-only",
    "title": "Handle a ticket that arrives with a screenshot only",
    "excerpt": "A routine for a screenshot-only ticket that reads the image, asks one useful question, checks the account, and records what was verified.",
    "service": "helpdesk-operations",
    "minutes": 8,
    "published": "2026-11-23",
    "sources": [
      {
        "name": "ISO 18295-1:2017 customer contact centres",
        "url": "https://www.iso.org/standard/70677.html"
      },
      {
        "name": "NIST SP 800-53 Rev. 5 security and privacy controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      },
      {
        "name": "NIST SP 800-92 Guide to Computer Security Log Management",
        "url": "https://csrc.nist.gov/pubs/sp/800/92/final"
      },
      {
        "name": "Microsoft Purview retention policies",
        "url": "https://learn.microsoft.com/en-us/purview/retention"
      }
    ],
    "body": [
      "## Read the screenshot before replying",
      "A screenshot can show an error, a page, or a partial workflow. Read it for the product, the account, the time, and the message. Record what is visible and what is missing. Do not ask the customer to repeat what the image already shows.",
      "Check the image for sensitive data before sharing it. A screenshot may include a name, an email, or a record. Record the redaction and the storage. The ticket should not spread personal data to the wrong people.",
      "## Ask one useful question",
      "Ask for the one detail that would change the diagnosis, such as the step before the error or the account used. A list of five questions overwhelms the customer. Record the question and the reason. Use the same definition next time so the comparison is fair.",
      "If the screenshot shows an error code, search the knowledge base before asking. A known code may have a documented fix. Record the article and the result. The customer should not wait for a question the desk can answer itself.",
      "## Check the account and the timeline",
      "Look up the account and the recent activity. The screenshot may be from a different account or an old session. Record the account checked and the time. A mismatch can explain the error without a product bug.",
      "Check the system status and the recent changes. A deployment or an outage may explain the image. Record the event and the time. The desk should not treat a known incident as a new defect.",
      "## Reproduce or escalate",
      "Try to reproduce the issue in a test account if the desk has one. Record the steps and the result. A reproduced issue is easier to route. If the desk cannot reproduce, say what was tried.",
      "Escalate with the screenshot, the account, the steps, and the result. Record the receiving owner and the expected response. An escalation without the evidence will come back. Keep the evidence with the record rather than in a separate message.",
      "## Close with a clear answer",
      "Tell the customer what was found and what happens next. If the issue is a known defect, say so and give the workaround. Record the response and the date. The customer should not be left with a screenshot and no answer."
    ],
    "image": "/images/november-23/outsourcedhelpdeskservices-handle-a-ticket-that-arrives-with-a-screenshot-only.webp",
    "heroImage": "/images/november-23/outsourcedhelpdeskservices-handle-a-ticket-that-arrives-with-a-screenshot-only.webp",
    "_words": 360
  },
  {
    "slug": "outsourcedhelpdeskservices-write-an-escalation-summary-for-a-recurring-outage",
    "title": "Write an escalation summary for a recurring outage",
    "excerpt": "An escalation summary for a recurring outage that states the pattern, the impact, the evidence, the owner, and the decision needed.",
    "service": "helpdesk-operations",
    "minutes": 8,
    "published": "2026-11-23",
    "sources": [
      {
        "name": "ISO 18295-1:2017 customer contact centres",
        "url": "https://www.iso.org/standard/70677.html"
      },
      {
        "name": "NIST SP 800-53 Rev. 5 security and privacy controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      },
      {
        "name": "NIST SP 800-92 Guide to Computer Security Log Management",
        "url": "https://csrc.nist.gov/pubs/sp/800/92/final"
      },
      {
        "name": "Microsoft Purview retention policies",
        "url": "https://learn.microsoft.com/en-us/purview/retention"
      }
    ],
    "body": [
      "## State the pattern, not the latest ticket",
      "A recurring outage looks like a series of separate tickets until someone counts them. The summary should state the dates, the duration, the affected service, and the customer impact. A pattern is more persuasive than a single incident. Record the source of each event.",
      "Separate the incidents that share a cause from those that only share a symptom. A repeated timeout may come from different services. Record the evidence and the uncertainty. The summary should not overstate the link.",
      "## Quantify the impact",
      "Record the number of customers or tickets affected, the duration, and the service level breached. A count without a duration can understate the impact. Add the support time spent and the manual workaround. The owner needs the full cost.",
      "Check the customer-facing messages and the credits or apologies already given. Record them. A summary that ignores the customer experience will struggle to get priority. Note the gap in the report rather than filling it with an assumption.",
      "## Present the evidence",
      "Attach the monitoring graphs, the ticket samples, the change log, and the vendor notices. Record the time range and the source. The evidence should let an owner verify the pattern without asking the desk to rebuild it. Keep the language plain enough for a new agent to follow.",
      "Note the gaps in the evidence. A missing log or a monitoring blind spot is part of the finding. Record the gap and the risk. The summary should be honest about what it cannot prove.",
      "## Name the owner and the decision",
      "State the decision needed, such as a platform fix, a vendor escalation, or a monitoring change. Name the owner who can make it and the date. A summary without a decision is a report. Record the result with the date and the owner so the next review can compare it.",
      "Explain the consequence of waiting. A recurring outage that is tolerated becomes the baseline. Record the risk and the next review date. The owner should see the cost of no action.",
      "## Follow up",
      "Record the decision and the action. If the decision is deferred, set a review date and the condition that would reopen it. Tell the desk what to do in the meantime. The summary should change the response, not only the archive."
    ],
    "image": "/images/november-23/outsourcedhelpdeskservices-write-an-escalation-summary-for-a-recurring-outage.webp",
    "heroImage": "/images/november-23/outsourcedhelpdeskservices-write-an-escalation-summary-for-a-recurring-outage.webp",
    "_words": 347
  }
];

export const november23ResearchArticles = [
  {
    "slug": "outsourcedhelpdeskservices-ticket-reassignment-and-resolution-time-in-a-help-desk",
    "title": "Ticket reassignment and resolution time in a help desk",
    "excerpt": "A review method for ticket reassignment, covering the owner change, the cause, the added time, and the difference between a reassignment and an escalation.",
    "body": [
      "## Question and scope",
      "This review asks how ticket reassignment affects resolution time in an outsourced help desk. The unit is one ticket that changes owner or queue after the first substantive response. The population is the tickets closed during the review month. The review excludes a planned routing correction made before any customer contact.",
      "The question matters because a reassignment adds a reread, a repeated question, and a new queue wait. A desk can look busy while a ticket moves between agents without progress. The review looks for a measure that points to a routing or knowledge fix rather than a blame conversation. Review the item at the next monthly check and note any change.",
      "## Define a reassignment",
      "Count a reassignment when the ticket owner changes after the first response or when the queue changes. Record the time, the old owner, the new owner, and the reason. Separate a transfer that happened before contact, which may be a routing correction, from a true reassignment. Use the same definition next time so the comparison is fair.",
      "Separate an escalation from a reassignment. An escalation adds a specialist while the original agent keeps ownership. A reassignment moves the ticket to a new owner. The report should show both because they affect the customer differently.",
      "## Build the frame",
      "Export the ticket history with owner changes, queue changes, timestamps, and categories. Reconcile the export with the ticket totals and record any missing history. A ticket moved by a bulk rule may look like a reassignment when it was a planned change. Keep the language plain enough for a new agent to follow.",
      "Exclude test tickets and bulk migrations with a stated rule. Record the number excluded. Check that the queue names are stable across the period. A rename without a mapping creates false reassignments.",
      "## Classify the cause",
      "Use a short list: wrong queue at intake, missing access, missing knowledge, customer request, or agent availability. Record the reason when the move happens. A free-text note is useful but hard to count, so the categories should match the fixes the desk can make. Record the result with the date and the owner so the next review can compare it.",
      "Review a sample of each category with the team lead. Record the agreement and the examples. A category used for everything is a sign the list needs revision. Keep the list stable across periods.",
      "## Read the time cost",
      "Report the share of tickets with at least one reassignment and the median time added. A rate without the time cost hides the impact. A ticket that moves in two minutes is different from one that waits a day. Assign the follow-up to a named person before the review closes.",
      "Compare reassigned tickets with resolved tickets in the same category. A category with a high rate may need a clearer intake question or a different first queue. The comparison makes the pattern visible. Use the same definition next time so the comparison is fair.",
      "## A four-week protocol",
      "Collect four weeks of data and review the top causes with the desk and the client owner. Choose one fix, such as a clearer category or a knowledge article. Record the change and repeat the measure. Test the step on one case before applying it to the whole desk.",
      "Check that a fall in reassignments did not become a rise in escalations. A desk may keep ownership while passing the work to a specialist, which improves the measure without improving the customer experience. Report both. Keep the language plain enough for a new agent to follow.",
      "## Limitations",
      "The measure depends on an accurate ticket history. A desk that moves work in chat and records it later will undercount. The report should state the source and the likely gap. A small sample may not show a stable rate.",
      "The measure also depends on the definition. A planned routing correction and a true reassignment can look the same in the data. The category and the timing help separate them, but some judgment remains. Record the result with the date and the owner so the next review can compare it."
    ],
    "keyStats": [
      {
        "value": "2",
        "label": "events separated: reassignment and escalation"
      },
      {
        "value": "4",
        "label": "weeks for a baseline"
      },
      {
        "value": "5",
        "label": "cause categories"
      }
    ],
    "published": "2026-11-23",
    "sourceDate": "2026-11-23",
    "updated": "2026-11-23",
    "related": [
      "outsourcedhelpdeskservices-write-a-shift-start-check-for-an-outsourced-help-desk-queue",
      "outsourcedhelpdeskservices-write-an-escalation-summary-for-a-recurring-outage",
      "outsourcedhelpdeskservices-set-a-knowledge-article-retirement-rule-for-an-outsourced-desk"
    ],
    "sources": [
      {
        "name": "ISO 18295-1:2017 customer contact centres",
        "url": "https://www.iso.org/standard/70677.html"
      },
      {
        "name": "NIST SP 800-53 Rev. 5 security and privacy controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      },
      {
        "name": "NIST SP 800-92 Guide to Computer Security Log Management",
        "url": "https://csrc.nist.gov/pubs/sp/800/92/final"
      },
      {
        "name": "Microsoft Purview retention policies",
        "url": "https://learn.microsoft.com/en-us/purview/retention"
      }
    ],
    "hero": "/images/november-23/outsourcedhelpdeskservices-ticket-reassignment-and-resolution-time-in-a-help-desk.webp"
  },
  {
    "slug": "outsourcedhelpdeskservices-customer-effort-score-as-a-support-measure",
    "title": "Customer effort score as a support measure",
    "excerpt": "A review method for customer effort, covering the question, the response rate, the channel, and the link to repeat contacts and resolution.",
    "body": [
      "## Question and scope",
      "This review asks whether a customer effort score is a useful support measure for an outsourced help desk. The unit is one customer response after a contact. The population is the contacts closed during the review month. The review excludes internal tickets and automated messages that did not involve a customer.",
      "The question matters because a fast ticket can still be hard for the customer. A customer who has to repeat information or chase an update may rate the effort as high even when the desk closed the ticket on time. The score can surface that experience. Review the item at the next monthly check and note any change.",
      "## Define the question",
      "Ask a short, consistent question such as how easy it was to get the issue handled. Use a five-point scale and a comment box. Keep the wording stable so the trend is comparable. Record the question version and the date it changed.",
      "Do not combine the effort question with a satisfaction question in one score. The two measure different things. Report them side by side so the reader can see the difference. Note the gap in the report rather than filling it with an assumption.",
      "## Check the response rate",
      "Report the response rate beside the score. A high score from a small, self-selected group is weak evidence. Record the number sent and the number returned. A low response rate may need a shorter survey or a different timing.",
      "Compare the response rate by channel and by issue type. A voice contact may get a different response from a chat. Record the difference and the sample. The score should not be read without the response rate.",
      "## Link to repeat contacts",
      "Check whether the low-effort responses also had fewer repeat contacts and reopens. A low effort score with a high repeat rate suggests the customer was satisfied with the interaction but not the outcome. Record the comparison. Record the result with the date and the owner so the next review can compare it.",
      "Review a sample of comments for a specific cause, such as a repeated question or a missing update. Record the theme and the owner. The comment is often more actionable than the number. Keep the evidence with the record rather than in a separate message.",
      "## A four-week protocol",
      "Collect four weeks of responses and review the result with the desk and the client owner. Choose one change, such as a shorter intake or a clearer update. Record the change and repeat the measure. Assign the follow-up to a named person before the review closes.",
      "Check that the change did not shift the effort to another channel. A shorter survey may raise the response rate without improving the experience. Report the response rate and the repeat contacts after the change. Use the same definition next time so the comparison is fair.",
      "## Limitations",
      "The score depends on who responds and when the question is asked. A customer who is still waiting may answer differently from one who has the fix. The report should state the timing. Test the step on one case before applying it to the whole desk.",
      "Effort is also subjective. Two customers with the same experience may score it differently. Use the score as a prompt for a conversation, not as a precise ranking. Keep the language plain enough for a new agent to follow."
    ],
    "keyStats": [
      {
        "value": "1",
        "label": "consistent question"
      },
      {
        "value": "5",
        "label": "point scale"
      },
      {
        "value": "4",
        "label": "weeks for a baseline"
      }
    ],
    "published": "2026-11-23",
    "sourceDate": "2026-11-23",
    "updated": "2026-11-23",
    "related": [
      "outsourcedhelpdeskservices-write-a-customer-update-for-a-long-running-ticket",
      "outsourcedhelpdeskservices-ticket-reassignment-and-resolution-time-in-a-help-desk",
      "outsourcedhelpdeskservices-handle-a-ticket-that-arrives-with-a-screenshot-only"
    ],
    "sources": [
      {
        "name": "ISO 18295-1:2017 customer contact centres",
        "url": "https://www.iso.org/standard/70677.html"
      },
      {
        "name": "NIST SP 800-53 Rev. 5 security and privacy controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      },
      {
        "name": "NIST SP 800-92 Guide to Computer Security Log Management",
        "url": "https://csrc.nist.gov/pubs/sp/800/92/final"
      },
      {
        "name": "Microsoft Purview retention policies",
        "url": "https://learn.microsoft.com/en-us/purview/retention"
      }
    ],
    "hero": "/images/november-23/outsourcedhelpdeskservices-customer-effort-score-as-a-support-measure.webp"
  },
  {
    "slug": "outsourcedhelpdeskservices-agent-schedule-adherence-and-queue-wait-time",
    "title": "Agent schedule adherence and queue wait time",
    "excerpt": "A review method for schedule adherence, covering the shift, the queue arrival pattern, the coverage gap, and the difference between presence and availability.",
    "body": [
      "## Question and scope",
      "This review asks how schedule adherence relates to queue wait time in an outsourced help desk. The unit is one agent shift. The population is the shifts scheduled during the review month. The review excludes planned training and approved leave, which are handled separately.",
      "The question matters because a team can be present and still leave the queue uncovered. Adherence measures whether the agent was available when scheduled, not whether the queue had the right skills. The review looks for a coverage measure, not a discipline score. Review the item at the next monthly check and note any change.",
      "## Define adherence",
      "Define adherence as the share of scheduled time the agent was available for contacts. Record the login, the break, the meeting, and the offline time. A shift that starts late or ends early changes the coverage. Use the same definition for every team.",
      "Separate a planned absence from an unplanned one. Approved leave is not an adherence failure. Record the category and the owner. The measure should protect legitimate absence.",
      "## Map the queue",
      "Record the queue arrivals by time of day and the staffed hours. A queue that peaks outside the shift will show a wait even with perfect adherence. Record the arrival pattern and the coverage. The fix may be a schedule change.",
      "Check the skills on shift, not only the headcount. A team of five without the billing skill cannot cover a billing queue. Record the skills and the gap. The adherence measure should be read with the skill mix.",
      "## Measure the wait",
      "Report the median wait and the share of contacts that waited beyond the target. Show the result by hour and by queue. A daily average hides the hour that is always short. The pattern is more useful than the total.",
      "Compare the wait on shifts with high and low adherence. A strong relationship suggests a coverage problem. A weak relationship suggests the queue is constrained by something else, such as access or knowledge. Keep the evidence with the record rather than in a separate message.",
      "## A four-week protocol",
      "Collect four weeks of shifts and queue data. Review the coverage gaps with the team lead and the client owner. Choose one change, such as a shift start or a break schedule. Record the change and repeat the measure.",
      "Check that the change did not move the gap to another hour. A schedule that covers the morning may leave the evening short. Report the whole day. Use the same definition next time so the comparison is fair.",
      "## Limitations",
      "The measure depends on accurate timekeeping and queue data. A manual login record may not match the phone system. The report should state the source and the gap. Test the step on one case before applying it to the whole desk.",
      "Adherence is not the same as productivity. An agent can be available and blocked by a slow system. Pair the measure with the queue and the tool performance rather than treating adherence as the whole story. Keep the language plain enough for a new agent to follow."
    ],
    "keyStats": [
      {
        "value": "1",
        "label": "unit: one agent shift"
      },
      {
        "value": "4",
        "label": "weeks for a baseline"
      },
      {
        "value": "2",
        "label": "measures: adherence and wait"
      }
    ],
    "published": "2026-11-23",
    "sourceDate": "2026-11-23",
    "updated": "2026-11-23",
    "related": [
      "outsourcedhelpdeskservices-write-a-shift-start-check-for-an-outsourced-help-desk-queue",
      "outsourcedhelpdeskservices-customer-effort-score-as-a-support-measure",
      "outsourcedhelpdeskservices-ticket-reassignment-and-resolution-time-in-a-help-desk"
    ],
    "sources": [
      {
        "name": "ISO 18295-1:2017 customer contact centres",
        "url": "https://www.iso.org/standard/70677.html"
      },
      {
        "name": "NIST SP 800-53 Rev. 5 security and privacy controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      },
      {
        "name": "NIST SP 800-92 Guide to Computer Security Log Management",
        "url": "https://csrc.nist.gov/pubs/sp/800/92/final"
      },
      {
        "name": "Microsoft Purview retention policies",
        "url": "https://learn.microsoft.com/en-us/purview/retention"
      }
    ],
    "hero": "/images/november-23/outsourcedhelpdeskservices-agent-schedule-adherence-and-queue-wait-time.webp"
  },
  {
    "slug": "outsourcedhelpdeskservices-knowledge-base-search-failure-as-a-training-signal",
    "title": "Knowledge base search failure as a training signal",
    "excerpt": "A review method for knowledge search failures, covering the query, the result, the agent action, and the training or content fix.",
    "body": [
      "## Question and scope",
      "This review asks whether knowledge base search failures can show a training or content gap in an outsourced help desk. The unit is one search that did not lead to a useful article. The population is the searches during the review month. The review excludes searches for internal administrative terms.",
      "The question matters because an agent who cannot find the answer will improvise or escalate. A search failure is a signal about the content, the vocabulary, or the agent's training. The review looks for a pattern that leads to a fix. Review the item at the next monthly check and note any change.",
      "## Define a failure",
      "Define a search failure as a query where the agent did not open a result, opened a result and returned quickly, or escalated the ticket with no article cited. Record the query, the results, and the action. The definition should be fixed before the log is read. Use the same definition next time so the comparison is fair.",
      "Separate a content gap from a vocabulary gap. A content gap means the article does not exist. A vocabulary gap means it exists but the agent used different words. The fixes differ, so the categories should be separate.",
      "## Build the frame",
      "Export the search log with the query, the results, the clicks, and the agent. Reconcile it with the ticket sample. Record the searches that cannot be linked to a ticket. The frame should cover the queues the desk actually works.",
      "Exclude test searches and administrative queries with a rule. Record the number excluded. Check the time zone and the date range so the search and ticket data align. Check the record again after a change in owner or system.",
      "## Review the pattern",
      "Group the failures by query theme and by queue. A repeated theme may need a new article or a clearer title. Record the top themes and the examples. The pattern is more useful than a single failed search.",
      "Check the article titles and the synonyms. An article called refund timing may not appear for a search for where is my money. Record the title and the query. A title change can fix a vocabulary gap.",
      "## A four-week protocol",
      "Collect four weeks of searches and review the top themes with the desk and the content owner. Choose one fix, such as a new article or a title change. Record the change and repeat the measure. Assign the follow-up to a named person before the review closes.",
      "Check whether the fix reduced escalations or repeat searches for the same theme. A new article that nobody finds is not a fix. Report the usage and the outcome. Use the same definition next time so the comparison is fair.",
      "## Limitations",
      "The search log depends on the tool and the agent's behavior. An agent may find the answer without searching, or search outside the tool. The report should state the coverage and the gap. Test the step on one case before applying it to the whole desk.",
      "A search failure is not proof of a training problem. The agent may be new, the query may be unusual, or the article may be wrong. The review should use the pattern, not a single case, to choose a fix. Keep the language plain enough for a new agent to follow."
    ],
    "keyStats": [
      {
        "value": "1",
        "label": "unit: one failed search"
      },
      {
        "value": "4",
        "label": "weeks for a baseline"
      },
      {
        "value": "2",
        "label": "gap types: content and vocabulary"
      }
    ],
    "published": "2026-11-23",
    "sourceDate": "2026-11-23",
    "updated": "2026-11-23",
    "related": [
      "outsourcedhelpdeskservices-set-a-knowledge-article-retirement-rule-for-an-outsourced-desk",
      "outsourcedhelpdeskservices-ticket-reassignment-and-resolution-time-in-a-help-desk",
      "outsourcedhelpdeskservices-write-a-customer-update-for-a-long-running-ticket"
    ],
    "sources": [
      {
        "name": "ISO 18295-1:2017 customer contact centres",
        "url": "https://www.iso.org/standard/70677.html"
      },
      {
        "name": "NIST SP 800-53 Rev. 5 security and privacy controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      },
      {
        "name": "NIST SP 800-92 Guide to Computer Security Log Management",
        "url": "https://csrc.nist.gov/pubs/sp/800/92/final"
      },
      {
        "name": "Microsoft Purview retention policies",
        "url": "https://learn.microsoft.com/en-us/purview/retention"
      }
    ],
    "hero": "/images/november-23/outsourcedhelpdeskservices-knowledge-base-search-failure-as-a-training-signal.webp"
  },
  {
    "slug": "outsourcedhelpdeskservices-escalation-volume-as-a-routing-quality-measure",
    "title": "Escalation volume as a routing quality measure",
    "excerpt": "A review method for escalation volume, covering the trigger, the receiving team, the time to accept, and the share that could have been resolved at first line.",
    "body": [
      "## Question and scope",
      "This review asks whether escalation volume is a useful routing quality measure for an outsourced help desk. The unit is one ticket escalated to a second-line or specialist team. The population is the tickets closed during the review month. The review excludes a planned transfer that was part of the original routing rule.",
      "The question matters because an escalation can be the right answer or a sign the first line lacked the access or the knowledge. A rising volume may mean the queue is changing, not that the agents are failing. The review looks for the cause behind the count. Review the item at the next monthly check and note any change.",
      "## Define an escalation",
      "Define an escalation as a ticket that moves to a team with more authority or specialist skill while the first-line owner remains accountable or hands off. Record the trigger, the receiving team, and the time. The definition should separate an escalation from a routine reassignment. Use the same definition next time so the comparison is fair.",
      "Record whether the customer was told about the escalation and the next update. A silent escalation leaves the customer without a contact. The review should include the customer communication. Note the gap in the report rather than filling it with an assumption.",
      "## Build the frame",
      "Export the escalation log with the ticket, the trigger, the receiving team, and the timestamps. Reconcile it with the ticket system. Record any escalation that appears in one source but not the other. Keep the language plain enough for a new agent to follow.",
      "Exclude test tickets and bulk migrations with a rule. Record the number excluded. Check the team names and the queue mapping so the comparison is stable. Check the record again after a change in owner or system.",
      "## Read the volume and the outcome",
      "Report the escalation rate by queue and by trigger. Add the share accepted within the target and the share returned to the first line without a fix. A high volume with a fast acceptance may be healthy, while a low volume with a slow acceptance may hide a problem. Record the result with the date and the owner so the next review can compare it.",
      "Review a sample of escalations that could have been resolved at first line. Record the missing access or knowledge and the owner. The sample turns the volume into a fix. Keep the evidence with the record rather than in a separate message.",
      "## A four-week protocol",
      "Collect four weeks of escalations and review the top triggers with the desk and the receiving team. Choose one change, such as a knowledge article or a temporary access grant. Record the change and repeat the measure. Assign the follow-up to a named person before the review closes.",
      "Check that the change did not hide a real escalation. A target that discourages escalation can leave a customer unresolved. Pair the volume with the resolution and the customer effort. Use the same definition next time so the comparison is fair.",
      "## Limitations",
      "The measure depends on the escalation log and the team definitions. A desk that escalates in chat and records it later will undercount. The report should state the source and the gap. Test the step on one case before applying it to the whole desk.",
      "A low escalation volume is not automatically good. It may mean the first line is attempting work outside its authority. The review should check the quality and the outcome, not only the count. Keep the language plain enough for a new agent to follow."
    ],
    "keyStats": [
      {
        "value": "1",
        "label": "unit: one escalated ticket"
      },
      {
        "value": "4",
        "label": "weeks for a baseline"
      },
      {
        "value": "2",
        "label": "outcomes: accepted and returned"
      }
    ],
    "published": "2026-11-23",
    "sourceDate": "2026-11-23",
    "updated": "2026-11-23",
    "related": [
      "outsourcedhelpdeskservices-write-an-escalation-summary-for-a-recurring-outage",
      "outsourcedhelpdeskservices-ticket-reassignment-and-resolution-time-in-a-help-desk",
      "outsourcedhelpdeskservices-knowledge-base-search-failure-as-a-training-signal"
    ],
    "sources": [
      {
        "name": "ISO 18295-1:2017 customer contact centres",
        "url": "https://www.iso.org/standard/70677.html"
      },
      {
        "name": "NIST SP 800-53 Rev. 5 security and privacy controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      },
      {
        "name": "NIST SP 800-92 Guide to Computer Security Log Management",
        "url": "https://csrc.nist.gov/pubs/sp/800/92/final"
      },
      {
        "name": "Microsoft Purview retention policies",
        "url": "https://learn.microsoft.com/en-us/purview/retention"
      }
    ],
    "hero": "/images/november-23/outsourcedhelpdeskservices-escalation-volume-as-a-routing-quality-measure.webp"
  }
];
