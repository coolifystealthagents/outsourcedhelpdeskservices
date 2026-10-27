// Generated for the 2026-10-27 batch. Each record carries its own sources.
export const oct27ResearchArticles = [
  {
    "slug": "helpdesk-first-meaningful-response-definition-oct27",
    "title": "Defining First Meaningful Response Without Flattering the Clock",
    "excerpt": "A protocol for separating an automated acknowledgment from a reply that actually moves the request, with a rule for every timestamp.",
    "published": "2026-10-27",
    "sourceDate": "2026-10-27",
    "hero": "/aug19-heroes/helpdesk-first-meaningful-response-definition-oct27.svg",
    "keyStats": [
      {
        "value": "6",
        "label": "timestamp rules"
      },
      {
        "value": "5",
        "label": "exclusion cases"
      }
    ],
    "body": [
      "## Research question\n\nHow much does a reported first-response time change when the definition requires a reply that contains a useful next step, rather than any outbound message? The unit of analysis is one customer request from arrival to the first response that either resolves a routine question or gives the customer a specific action, decision, or checkpoint. The study does not estimate an industry benchmark; it tests whether a local definition can be applied consistently by two reviewers.",
      "## Why the first timestamp is not the answer\n\nMost ticketing systems record the first agent comment, which may be an automated acknowledgment, a routing note, or a request for information the customer already supplied. A provider can improve the reported number by sending a fast template that adds no value. The measure becomes meaningful only when the definition names what the reply must contain and treats an automated message as a separate event.",
      "## Freeze the population before inspection\n\nDefine the channels, request types, service windows, and observation period. Decide in advance how to treat requests that arrive through two channels, requests that are split into child tickets, and requests that are reopened within a fixed window. Record the query, the export time, and the time zone. Preserve excluded counts by reason so a reader can see how the denominator was built.",
      "## Set six timestamp rules\n\nRecord arrival, automated acknowledgment, first human assignment, first substantive reply, first customer-visible commitment, and acceptance or resolution. Each timestamp needs a source system and a rule for rounding. If two systems disagree by more than a stated tolerance, keep both and flag the record. The first substantive reply is the measure; the other timestamps explain the gap around it.",
      "## Define the substance test\n\nA reply counts as substantive when it contains at least one of the following: a verified answer to the stated question, a specific next step the customer can take, a named owner and date for the next action, or a request for one fact that is genuinely required and not already present. It does not count if it only acknowledges, apologizes, restates the request, or promises an update without a time. Write the test as a short checklist and give reviewers two examples and two near misses.",
      "## Handle the five awkward cases\n\nDecide in advance how to classify a reply that resolves the issue but arrives after a self-service click, a reply that is substantive but sent to the wrong recipient, a reply that asks for information already in the ticket, a reply that routes to another team without customer-facing content, and a request that is closed as duplicate. Each case gets a written rule. If the reviewers cannot agree, the definition needs revision before the sample grows.",
      "## Calibrate two reviewers\n\nHave two reviewers independently classify a small set of records, then compare. Report agreement per field, not just an overall percentage. Disagreements about substance usually reveal a missing example; disagreements about timestamps usually reveal a source conflict. Preserve the initial ratings and the adjudication so the report distinguishes genuine agreement from harmonization after discussion.",
      "## Report the gap honestly\n\nShow the median and distribution for the automated acknowledgment, the first substantive reply, and the customer-visible commitment. Include the share of requests with no substantive reply in the window and the share that were resolved by self-service. A fast acknowledgment with a slow substantive reply is a different service experience from a slow acknowledgment that is immediately useful, and the report should make that visible.",
      "## Control for request type and channel\n\nChat, email, and portal requests have different natural rhythms. A chat request may expect a reply in minutes; an email request may reasonably wait until the next business window. Report by channel and request family, and show the mix. Do not compare two providers on a combined measure when one handles mostly password resets and the other handles integration failures.",
      "## Limitations\n\nThe substance test depends on reviewer judgment and on the quality of the ticket record. A substantive reply may still fail to resolve the issue, and a terse reply may be exactly what the customer needed. Automated systems may send messages that look human. The protocol measures the communication event, not the outcome, and it should be paired with a resolution check before anyone treats it as a service guarantee."
    ],
    "sources": [
      {
        "name": "Atlassian, Jira Service Management Documentation",
        "url": "https://support.atlassian.com/jira-service-management-cloud/",
        "note": "Queue and comment fields used to define response events. Checked October 27, 2026."
      },
      {
        "name": "U.S. GAO, Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g",
        "note": "Method guidance for documenting data sources and limitations. Checked October 27, 2026."
      },
      {
        "name": "NIST SP 800-61 Rev. 3, Incident Response Recommendations",
        "url": "https://csrc.nist.gov/pubs/sp/800/61/r3/final",
        "note": "Communication checkpoints during incidents. Checked October 27, 2026."
      }
    ],
    "related": [
      "helpdesk-macro-usage-audit-protocol-oct27",
      "helpdesk-reopen-cause-attribution-study-oct27"
    ],
    "serviceHandoff": {
      "heading": "Apply the definition to one queue",
      "body": [
        "Choose one request family, freeze the timestamp rules, and run two reviewers on twenty records. Compare the definitions before extending the measure to a second queue."
      ],
      "href": "/contact",
      "label": "Plan a response-time review"
    }
  },
  {
    "slug": "helpdesk-macro-usage-audit-protocol-oct27",
    "title": "Auditing Macro Usage Without Punishing Fast Replies",
    "excerpt": "A method for testing whether canned replies match the request, the customer context, and the approved boundary.",
    "published": "2026-10-27",
    "sourceDate": "2026-10-27",
    "hero": "/aug19-heroes/helpdesk-macro-usage-audit-protocol-oct27.svg",
    "keyStats": [
      {
        "value": "4",
        "label": "fit categories"
      },
      {
        "value": "3",
        "label": "edit patterns"
      }
    ],
    "body": [
      "## Research question\n\nWhen an agent uses an approved macro, does the reply fit the request and the customer's context, or does it only look efficient? The unit is one outbound reply that used a macro, with or without an edit. The audit classifies fit, records the edit pattern, and links each mismatch to a cause: macro scope, intake information, procedure, or agent choice.",
      "## Why usage volume misleads\n\nA high macro usage rate can indicate a mature knowledge base or a team that sends the easiest reply regardless of the question. A low rate can indicate careful tailoring or missing content. Without a fit test, neither direction tells a manager anything useful. The audit therefore samples replies and judges them against the request, not against a target utilization percentage.",
      "## Build the sample frame\n\nExport replies from a defined period, including those sent with no edit, minor edits, and substantial edits. Exclude automated notifications and internal notes. Stratify by macro, request type, and agent group so one high-volume macro does not dominate. Record how the export identifies macro use; if the system cannot, the audit starts with a tagging change rather than a sample.",
      "## Define four fit categories\n\nExact fit means the macro answered the request without a material change. Adapted fit means the agent changed variables or added one clarifying sentence without changing the commitment. Partial fit means the macro addressed part of the request but the agent added substantive content. Mismatch means the reply did not answer the stated request or contradicted an approved boundary. Reviewers need examples for each category before scoring.",
      "## Capture the edit pattern\n\nFor every edited reply, record what changed: a variable, a date, a product name, a linked article, a commitment, or a policy statement. Changes to commitments and policy statements should trigger a separate review regardless of fit, because they may exceed the agent's authority. A pattern of commitment edits usually means the macro is being used outside its intended scope.",
      "## Judge the request, not the tone\n\nRead the customer's original message and any prior context before reading the reply. Ask whether the reply gives the customer a usable next step and whether it stays inside the approved boundary. Do not reward a warm tone that avoids the question, and do not penalize a direct reply that answers it. Tone is a separate quality attribute with its own examples.",
      "## Calibrate and test reliability\n\nTwo reviewers classify a calibration set independently. Report agreement by fit category and discuss every mismatch. If reviewers disagree mainly on partial versus adapted, the definitions are too close; merge or sharpen them. Repeat calibration after any definition change. The audit is only as good as the consistency of its categories.",
      "## Link mismatches to a cause\n\nFor each mismatch, record the likely cause: the macro was too broad, the intake did not capture a required fact, the procedure changed without updating the macro, or the agent chose the wrong macro. This attribution is a hypothesis, not a verdict. Review a sample with the agent and the content owner to confirm it before assigning a fix.",
      "## Report fit and risk together\n\nShow the fit distribution, the edit patterns, and the number of replies that changed a commitment or a policy statement. A 90 percent exact-fit rate is not reassuring if the remaining 10 percent include unauthorized promises. Pair the fit measure with a count of boundary violations and a count of replies that had to be corrected after sending.",
      "## Limitations\n\nThe audit depends on accurate macro tagging, and it cannot see how the customer interpreted the reply. A reply that fits the request may still fail because the underlying procedure is wrong. Reviewers may favor familiar phrasing. Use the audit to improve content and intake, not to rank agents on their use of shortcuts."
    ],
    "sources": [
      {
        "name": "Atlassian, Jira Service Management Documentation",
        "url": "https://support.atlassian.com/jira-service-management-cloud/",
        "note": "Macro and comment metadata used in the sample frame. Checked October 27, 2026."
      },
      {
        "name": "NIST SP 800-53 Rev. 5, Security and Privacy Controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
        "note": "Authorization and accountability context for approved replies. Checked October 27, 2026."
      },
      {
        "name": "UK ICO, Data Protection Principles",
        "url": "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles/a-guide-to-the-data-protection-principles/",
        "note": "Data minimisation in customer communications. Checked October 27, 2026."
      }
    ],
    "related": [
      "helpdesk-first-meaningful-response-definition-oct27",
      "helpdesk-kb-deflection-claim-test-oct27"
    ],
    "serviceHandoff": {
      "heading": "Audit one macro family",
      "body": [
        "Pick the three most-used macros in a single queue, score forty replies, and review every edit that changed a commitment."
      ],
      "href": "/contact",
      "label": "Review a macro family"
    }
  },
  {
    "slug": "helpdesk-reopen-cause-attribution-study-oct27",
    "title": "Attributing Reopens to Cause Without Blaming the Last Agent",
    "excerpt": "A study design for separating recurrence, misunderstanding, new scope, and premature closure in reopened tickets.",
    "published": "2026-10-27",
    "sourceDate": "2026-10-27",
    "hero": "/aug19-heroes/helpdesk-reopen-cause-attribution-study-oct27.svg",
    "keyStats": [
      {
        "value": "5",
        "label": "cause categories"
      },
      {
        "value": "2",
        "label": "observation windows"
      }
    ],
    "body": [
      "## Research question\n\nWhat share of reopened tickets reflects a failed resolution, and what share reflects a different problem: a customer who could not apply the answer, a new request, or a closure that happened before evidence existed? The unit is one reopen event linked to its original ticket. The study produces a local cause profile and a list of process changes, not a benchmark for reopen rates.",
      "## Define the reopen event precisely\n\nA reopen occurs when a customer returns to the same request after closure and the record is reopened or a linked follow-up is created within the observation window. Decide whether a reply to the closure notification counts, whether a new ticket about the same issue counts, and how to treat an automatic reopen by the system. Write these rules before pulling data; otherwise the count depends on tool behavior.",
      "## Use two windows\n\nMeasure reopens within seven days and within thirty days. Short reopens are more likely to reflect the original interaction; longer reopens may include new events, changed conditions, or seasonal issues. Report both and do not combine them into one rate without showing the split. If the tool cannot distinguish, the first improvement is a timestamp field, not a bigger sample.",
      "## Build the cause dictionary\n\nUse five categories: recurrence of the same symptom under the same conditions, misunderstanding or inability to apply the answer, new scope introduced by the customer, premature closure before the agreed evidence, and external change such as a policy or vendor event. Add a sixth category for unknown when the record is insufficient. Unknown is a finding about documentation, not a reason to guess.",
      "## Read the original closure first\n\nClassify the reopen before reading the later conversation. Then read the reopen message and record whether the new information changes the classification. This order reduces hindsight bias. Keep both the initial and final classification with a note explaining any change. Report the number of changed classifications; a high count suggests the closure records are too thin to support review.",
      "## Judge the closure standard, not the outcome\n\nA ticket can be closed correctly and still reopen because the customer encountered a new condition. Conversely, a ticket can stay closed with no complaint and still have been closed prematurely. For each case, ask whether the evidence at closure supported the stated resolution. This requires a written closure standard, such as a confirmed test, a customer acknowledgment, or a verified system state.",
      "## Sample and calibrate\n\nStratify by cause, request type, and agent group. Include reopens from every shift and channel. Have two reviewers classify a calibration set, compare, and revise the dictionary before the main sample. Record disagreements and adjudications. Do not let a reviewer who handled the original ticket classify their own reopen without a second opinion.",
      "## Analyze by cause and interval\n\nReport counts, rates per hundred closures, and the mix by category. Show the seven-day and thirty-day figures side by side. A high misunderstanding share points to article clarity or customer communication. A high premature-closure share points to targets, checklists, or approval timing. A high new-scope share may reflect a product change rather than a support defect.",
      "## Connect causes to owners\n\nFor each material cause, name the owner who can change it: knowledge owner, queue manager, product owner, or customer success. Record the proposed change and the date to recheck. The study is complete when it produces a small set of owned changes, not when it produces a chart. Re-run the same definitions after the changes so the comparison is meaningful.",
      "## Limitations\n\nReopen data depends on customers choosing to return through the tracked channel; many simply stop using the service or complain elsewhere. Tool behavior can create or suppress reopens. The cause categories require judgment, and the original ticket may omit the context needed to classify it. State these limits and avoid using the rate as a standalone performance target."
    ],
    "sources": [
      {
        "name": "U.S. GAO, Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g",
        "note": "Data quality and limitation reporting guidance. Checked October 27, 2026."
      },
      {
        "name": "Atlassian, Jira Service Management Documentation",
        "url": "https://support.atlassian.com/jira-service-management-cloud/",
        "note": "Ticket status and reopen behavior in service queues. Checked October 27, 2026."
      },
      {
        "name": "NIST SP 800-61 Rev. 3, Incident Response Recommendations",
        "url": "https://csrc.nist.gov/pubs/sp/800/61/r3/final",
        "note": "Verification and closure concepts for incident records. Checked October 27, 2026."
      }
    ],
    "related": [
      "helpdesk-first-meaningful-response-definition-oct27",
      "helpdesk-handoff-completeness-evidence-method-oct27"
    ],
    "serviceHandoff": {
      "heading": "Profile one month of reopens",
      "body": [
        "Freeze the reopen rule, classify a stratified sample, and assign one owner to each material cause before changing any target."
      ],
      "href": "/contact",
      "label": "Study reopen causes"
    }
  },
  {
    "slug": "helpdesk-handoff-completeness-evidence-method-oct27",
    "title": "Evidence for Shift Handoff Completeness, Not Handoff Volume",
    "excerpt": "A method for testing whether the next shift can act without asking a question, using acceptance and return records.",
    "published": "2026-10-27",
    "sourceDate": "2026-10-27",
    "hero": "/aug19-heroes/helpdesk-handoff-completeness-evidence-method-oct27.svg",
    "keyStats": [
      {
        "value": "7",
        "label": "required fields"
      },
      {
        "value": "3",
        "label": "acceptance states"
      }
    ],
    "body": [
      "## Research question\n\nDoes a written shift handoff let the incoming agent take the next action without a follow-up question? The unit is one handoff item, not one shift. The study measures completeness, acceptance, and return reasons, and tests whether a defined field set improves the share of items accepted on first read.",
      "## Why volume is a poor proxy\n\nA long handoff note can contain more detail and less usable information. Counting items or words rewards length. The useful test is whether the receiver can state the next action, the owner, and the deadline after reading the item. That is an observable behavior, and it can be recorded at the moment of acceptance rather than reconstructed later.",
      "## Define the item and the fields\n\nAn item is a single open task, ticket, or decision that crosses the shift boundary. Required fields are the customer goal, impact, last verified action, next action, action owner, deadline in both time zones, and the evidence link. Add an optional uncertainty field. If a field does not apply, the sender marks it not applicable rather than leaving it blank, so a blank is unambiguously missing.",
      "## Record acceptance in three states\n\nThe incoming agent marks each item as accepted, returned, or reassigned. Accepted means the receiver can act without asking a question. Returned means a required field is missing, unclear, or contradictory; the receiver records the reason code. Reassigned means the item belongs to another owner. Record the time of acceptance and the receiver. This turns a narrative into a measurable transfer.",
      "## Calibrate the meaning of accepted\n\nTwo reviewers read the same items and independently predict whether the next action is clear. Compare their prediction with the actual acceptance state. A gap suggests that the field set is incomplete or that the receiver is applying a different standard. Discuss the ambiguous items and refine the field definitions before the main observation period.",
      "## Observe a full cycle\n\nCollect at least four weeks of handoffs across shifts, including weekends and any holiday period. Record volume, acceptance rate, return reasons, and the time between handoff posting and first acceptance. Compare shifts with similar work mix. A shift with a high return rate may have a harder queue, a newer sender, or a template that does not fit its work.",
      "## Test one change at a time\n\nIf the team adds a field or a checklist, introduce it for one work lane and compare before and after. Do not change the template, the training, and the queue assignment in the same week. Use the same field definitions and the same acceptance standard. Record the date of the change so a later reviewer can see what moved.",
      "## Report completeness and delay together\n\nA complete handoff that sits unread for three hours is still a failure. Report acceptance rate, median time to acceptance, and the share of items that were returned more than once. Include the number of urgent items and whether they were accepted before the stated deadline. Pair the measures with the work mix to avoid a misleading comparison between shifts.",
      "## Limitations\n\nThe acceptance state is a self-report by the receiver and can be gamed by accepting everything. Periodic review of returned items and a sample of accepted items reduces that risk. The field set may not fit every work type, and a handoff can be complete yet still based on a wrong assumption. The method measures transfer clarity, not the correctness of the underlying work."
    ],
    "sources": [
      {
        "name": "Google Site Reliability Engineering, Managing Incidents",
        "url": "https://sre.google/sre-book/managing-incidents/",
        "note": "Handoff and role clarity during operational events. Checked October 27, 2026."
      },
      {
        "name": "NIST SP 800-61 Rev. 3, Incident Response Recommendations",
        "url": "https://csrc.nist.gov/pubs/sp/800/61/r3/final",
        "note": "Coordination and communication checkpoints. Checked October 27, 2026."
      },
      {
        "name": "Atlassian, Incident Management Handbook",
        "url": "https://www.atlassian.com/incident-management/handbook",
        "note": "Incident roles and transition practices. Checked October 27, 2026."
      }
    ],
    "related": [
      "helpdesk-reopen-cause-attribution-study-oct27",
      "helpdesk-first-meaningful-response-definition-oct27"
    ],
    "serviceHandoff": {
      "heading": "Test one shift pair",
      "body": [
        "Record acceptance for one APAC-to-North-America pair for four weeks, then change only the handoff template and compare."
      ],
      "href": "/contact",
      "label": "Measure a handoff pair"
    }
  },
  {
    "slug": "helpdesk-kb-deflection-claim-test-oct27",
    "title": "Testing a Knowledge-Base Deflection Claim Before Repeating It",
    "excerpt": "A protocol for checking whether self-service actually prevented tickets, rather than attributing every drop in volume to the library.",
    "published": "2026-10-27",
    "sourceDate": "2026-10-27",
    "hero": "/aug19-heroes/helpdesk-kb-deflection-claim-test-oct27.svg",
    "keyStats": [
      {
        "value": "4",
        "label": "deflection signals"
      },
      {
        "value": "3",
        "label": "comparison groups"
      }
    ],
    "body": [
      "## Research question\n\nDid a knowledge-base article prevent support contacts, or did contact volume fall for another reason? The unit is a request family over a defined period, with a comparison between a period before and after an article change and, where possible, a similar family that did not receive the change. The study tests a local claim; it does not produce a universal deflection rate.",
      "## Separate deflection from avoidance\n\nA customer who reads an article and solves the problem is deflected. A customer who gives up, asks a colleague, or uses a different channel is not. A drop in ticket volume can therefore hide a worse experience. The study looks for positive signals: article views followed by no contact, a self-service completion event, or a customer statement that the article helped.",
      "## Pick the comparison groups\n\nUse three groups where possible: the request family that received the new article, a similar family without the change, and the same family in the prior period. The second group controls for a general change in demand; the third controls for seasonality. If a comparison group is not available, say so and treat the before-and-after result as suggestive rather than conclusive.",
      "## Define the four signals\n\nRecord article views, unique users, self-service completions, and contacts that reference the article. A contact that references the article can mean the article helped someone get close, or that it failed. Read a sample of those contacts to classify them. Do not treat a view as a success; a view is exposure, not resolution.",
      "## Account for the launch effect\n\nAnnouncements, search ranking changes, and a link from the portal can raise views without changing the underlying need. Record every distribution change during the period. If the article was promoted in a newsletter, the volume change may reflect the promotion rather than the article's quality. Keep a simple change log alongside the data.",
      "## Sample contacts for cause\n\nFor each period, sample contacts in the request family and classify whether the customer had seen the article, whether they tried the steps, and where they stopped. This qualitative layer explains the numbers. A high view count with many contacts that stopped at the same step points to a prerequisite or a confusing instruction, not to a demand problem.",
      "## Calculate with visible denominators\n\nReport contacts per thousand eligible users or per thousand sessions, not only the raw count. Show the article views and the contact volume together. A decline in contacts alongside a decline in eligible users is not evidence of deflection. Include the observation window and any known outages or product changes.",
      "## Test one revision at a time\n\nIf the article changes, keep the old version and the date. Compare the four weeks before and after, and note any concurrent change. Do not rewrite the article, move it, and promote it in the same week and then attribute the result to the writing. One change per cycle gives a cleaner reading, even if it takes longer.",
      "## Report the claim with its limits\n\nState what the evidence supports: for example, contacts in this family fell after the article was linked from the portal, while a comparable family was flat. Then state what it does not support: that the article would work for another product, another customer group, or another channel. Deflection claims are local and perishable.",
      "## Limitations\n\nCustomers may solve a problem without any tracked signal, and they may contact support without mentioning the article. Search and portal analytics are incomplete. A product change can dominate the result. The protocol is designed to make the claim honest, not to prove causation from a single before-and-after comparison."
    ],
    "sources": [
      {
        "name": "U.S. GAO, Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g",
        "note": "Guidance for documenting data sources and uncertainty. Checked October 27, 2026."
      },
      {
        "name": "Atlassian, Jira Service Management Documentation",
        "url": "https://support.atlassian.com/jira-service-management-cloud/",
        "note": "Request channel and reporting concepts. Checked October 27, 2026."
      },
      {
        "name": "NIST SP 800-53 Rev. 5, Security and Privacy Controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
        "note": "Access and record-keeping context for self-service content. Checked October 27, 2026."
      }
    ],
    "related": [
      "helpdesk-macro-usage-audit-protocol-oct27",
      "helpdesk-handoff-completeness-evidence-method-oct27"
    ],
    "serviceHandoff": {
      "heading": "Test one article family",
      "body": [
        "Choose one request family with a stable volume, record a four-week baseline, then change one article element and compare with a similar family."
      ],
      "href": "/contact",
      "label": "Plan a deflection test"
    }
  }
];
