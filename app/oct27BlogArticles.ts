// Generated for the 2026-10-27 batch. Each record carries its own sources.
export const oct27BlogArticles = [
  {
    "slug": "helpdesk-macro-approval-ownership-oct27",
    "title": "Who Signs Off a Help Desk Macro Before It Goes Live",
    "excerpt": "A canned reply is a policy statement. Give every macro an author, a reviewer, an expiry, and a trigger for reapproval.",
    "minutes": 8,
    "published": "2026-10-27",
    "heroImage": "/aug19-heroes/helpdesk-macro-approval-ownership-oct27.svg",
    "body": [
      "## A macro is a decision in disguise\n\nMost teams treat a macro as a writing shortcut. In practice it tells a customer what the company will do, what it will not do, and how long something will take. That makes it a policy artifact. If the reply promises a refund window, a security step, or a service timeline, someone with authority for that promise has to approve the wording before an agent can send it under pressure.",
      "## Name the three roles\n\nAssign an author who drafts and maintains the text, a subject reviewer who confirms the facts and the boundary, and an owner who accepts the operational risk. For a password reset macro, the reviewer might be the identity lead. For a billing adjustment macro, it is the finance owner. Keep the three names on the macro record. A macro with no named owner drifts until a customer complaint discovers the gap.",
      "## Separate the stable sentence from the variable field\n\nApproved language should cover the parts that must not change: the reason for the step, the limit of what support can do, and the next action. Variable fields should be limited to facts the agent has verified, such as a ticket number, an approved appointment, or a product name. Do not let a variable field hold a promise. Merge fields that invite free text near a commitment are the most common source of unauthorized replies.",
      "## Set an expiry and a reapproval trigger\n\nGive each macro a review date and a set of triggers: a pricing change, a policy update, a tool migration, a new regulatory requirement, or a spike in customer complaints. Expired macros should stop appearing in the agent's picker until someone reviews them. That single control prevents the familiar situation where a retired policy keeps circulating because the text still looks reasonable.",
      "## Test the macro against three cases\n\nBefore release, test one straightforward request, one request with a missing fact, and one request that crosses the boundary. The first should be answerable, the second should prompt a specific question, and the third should route to an owner. If the macro can be sent in all three cases without change, it is too broad. Record the test cases with the macro so the next reviewer can repeat them.",
      "## Log use and edits\n\nRecord when a macro is used, when it is edited, and who approved each version. A sudden rise in usage can indicate a new issue, a misleading subject line, or agents defaulting to the easiest reply. A sudden drop may mean the macro no longer matches the product. Review both directions, and sample the tickets where an agent edited the approved text before sending.",
      "## Retire with a reason\n\nWhen a macro is replaced, archive it with the date and the reason, and remove it from the live picker. Do not leave two versions with similar names. The archive helps a reviewer understand what customers were told during a period, and it prevents an old reply from returning through a saved personal template."
    ],
    "sources": [
      {
        "name": "NIST SP 800-53 Rev. 5, Security and Privacy Controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      },
      {
        "name": "NIST SP 800-63B, Digital Identity Guidelines",
        "url": "https://pages.nist.gov/800-63-4/sp800-63b.html"
      },
      {
        "name": "Atlassian, Jira Service Management Documentation",
        "url": "https://support.atlassian.com/jira-service-management-cloud/"
      }
    ],
    "cta": {
      "href": "/contact",
      "label": "help desk content review"
    }
  },
  {
    "slug": "helpdesk-sso-login-loop-triage-oct27",
    "title": "Triage an SSO Login Loop Without Breaking the Account",
    "excerpt": "A login loop is an identity symptom, not a password problem. Separate the safe checks from the changes only an identity owner may make.",
    "minutes": 9,
    "published": "2026-10-27",
    "heroImage": "/aug19-heroes/helpdesk-sso-login-loop-triage-oct27.svg",
    "body": [
      "## Recognize the loop before resetting anything\n\nA user who authenticates successfully and is then returned to the sign-in page has usually passed the identity check. The failure sits in the session, the application assignment, the conditional access rule, or a browser state that keeps replaying an old token. Resetting the password is the wrong first move because it changes a credential that was never the problem and adds another variable to the investigation.",
      "## Collect the evidence the identity owner needs\n\nAsk for the exact timestamp, the application, the browser or device, whether the loop happens in a private window, and any error code shown after the redirect. Do not ask for the password or a one-time code. A screenshot of the error page is useful if it contains no token or personal data. Record whether the user can reach a different application with the same identity, because that narrows the fault to one app or to the whole session.",
      "## Run only the safe local checks\n\nClearing the site's cookies and cached session for the affected application is a reasonable first step, and it is reversible. Trying a private window tests whether an extension or stale profile is involved. Checking the system clock matters because a skewed device clock can invalidate tokens. Do not ask the user to disable security software, install a certificate, or change a device policy to make the loop stop.",
      "## Stop at the assignment boundary\n\nThe agent can confirm that the user has an active account and that the application is listed in the catalog. Changing an application assignment, editing a conditional access policy, or bypassing multifactor authentication belongs to the identity owner. Route those requests with the evidence collected, the impact, and the time the user has been blocked. A clear stop is faster than an unauthorized workaround that later has to be undone.",
      "## Handle the shared-device case separately\n\nLoops on a shared or loaner device often come from a stale profile or a session that belongs to the previous user. Do not sign the new user into the old profile to save time. Use the approved device reset or a fresh profile, and record the asset. If the device is unmanaged, the identity owner decides whether access is allowed at all.",
      "## Close with a verification the user can perform\n\nAsk the user to open the application in the normal browser and complete one ordinary action, then report the result. A successful sign-in is not the same as a working session. Record the verification time and the exact application. If the loop returns, the ticket reopens with the new timestamp rather than starting from the beginning.",
      "## Review loops as a pattern\n\nGroup login-loop tickets by application, browser, and error code. A cluster after a policy change points to the change owner. A cluster on one application points to its integration. A cluster on one team's devices points to a device or network condition. The review should produce one owner and one next check, not a general reminder to clear cookies."
    ],
    "sources": [
      {
        "name": "NIST SP 800-63B, Digital Identity Guidelines",
        "url": "https://pages.nist.gov/800-63-4/sp800-63b.html"
      },
      {
        "name": "CISA, Require Multifactor Authentication",
        "url": "https://www.cisa.gov/secure-our-world/require-multifactor-authentication"
      },
      {
        "name": "Microsoft, Troubleshoot SAML-Based Single Sign-On",
        "url": "https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/debug-saml-sso-issues"
      }
    ],
    "cta": {
      "href": "/contact",
      "label": "identity triage review"
    }
  },
  {
    "slug": "helpdesk-reopen-taxonomy-oct27",
    "title": "Classify Ticket Reopens So They Point to a Fix",
    "excerpt": "Not every reopen means the same failure. Separate recurrence, misunderstanding, new scope, and premature closure before changing the process.",
    "minutes": 8,
    "published": "2026-10-27",
    "heroImage": "/aug19-heroes/helpdesk-reopen-taxonomy-oct27.svg",
    "body": [
      "## Why a reopen count is not a diagnosis\n\nA reopened ticket can mean the fix failed, the customer did not understand the answer, a new problem appeared, or the agent closed too early. Treating all four as one quality defect produces a misleading number and a useless action plan. The taxonomy starts with the customer's reason, captured in their words, and then adds the agent's classification after review.",
      "## Start with the customer's words\n\nWhen a ticket reopens, ask what changed and what the customer expected. Record the answer before reading the original resolution. This ordering reduces the tendency to confirm the first explanation. Keep the original resolution text and the reopen message together so a reviewer can see the gap between what was said and what was heard.",
      "## Use four primary categories\n\nRecurrence means the same symptom returned under the same conditions. Misunderstanding means the customer could not apply the answer or expected a different outcome. New scope means the reopen introduced a related but distinct request. Premature closure means the agent closed before the agreed evidence or confirmation existed. Add a fifth category for an external change, such as a new policy or a vendor outage, when the original answer was correct at the time.",
      "## Score the original closure decision\n\nFor each reopen, ask whether the evidence at closure supported the resolution. A closure can be reasonable even if the customer later returns, provided the recorded evidence matched the stated outcome. Conversely, a closure can be premature even if the customer never complains. This second judgment requires a sample review, not just a count of reopens.",
      "## Separate agent action from knowledge gaps\n\nIf the correct procedure existed and was followed, the reopen may be a product failure or a new event. If the procedure was missing or wrong, the fix belongs in the knowledge base. If the agent skipped a step, the fix may be a checklist or a permission constraint. Label the corrective owner so the pattern does not get assigned to the agent by default.",
      "## Report by category and interval\n\nShow reopens within seven days and within thirty days separately, because delayed recurrences often reflect a different cause. Include the number of closures in the denominator and the category mix. A rise in new-scope reopens may follow a product launch and says little about support quality. A rise in premature closures after a backlog push says a great deal.",
      "## Review a sample together\n\nOnce a month, review five reopens with the agent and the knowledge owner. Ask what would have prevented each one and whether the answer is a document, a form field, a customer expectation, or a technical fix. Record the decision and the owner. The conversation is more valuable than a score because it produces a specific change."
    ],
    "sources": [
      {
        "name": "Atlassian, Jira Service Management Documentation",
        "url": "https://support.atlassian.com/jira-service-management-cloud/"
      },
      {
        "name": "NIST SP 800-61 Rev. 3, Incident Response Recommendations",
        "url": "https://csrc.nist.gov/pubs/sp/800/61/r3/final"
      },
      {
        "name": "U.S. GAO, Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g"
      }
    ],
    "cta": {
      "href": "/contact",
      "label": "reopen analysis review"
    }
  },
  {
    "slug": "helpdesk-apac-na-shift-handoff-oct27",
    "title": "Write an APAC-to-North-America Shift Handoff That Holds",
    "excerpt": "An overnight handoff needs a custody transfer, an acceptance step, and a short list of what must not wait for morning.",
    "minutes": 8,
    "published": "2026-10-27",
    "heroImage": "/aug19-heroes/helpdesk-apac-na-shift-handoff-oct27.svg",
    "body": [
      "## The handoff is a transfer, not a summary\n\nAt the end of the APAC shift, the outgoing agent knows which tickets are fragile: the customer who was promised an update, the vendor who has not replied, the access request waiting on a manager. A summary that lists ticket numbers transfers none of that knowledge. The handoff record should transfer custody of specific next actions with a person who accepts them.",
      "## Use a fixed field set\n\nEach open item needs the ticket link, the customer goal, the impact, the last verified action, the next action, the owner of that action, the deadline in both time zones, and the risk if it slips. Add one line for what the outgoing agent is unsure about. The uncertainty line is often the most useful because it prevents the next shift from treating an assumption as a fact.",
      "## Rank by what cannot wait\n\nSeparate items that need action before the next shift starts from items that can wait for normal hours. A payroll cutoff, a security report, or a customer commitment that expires overnight belongs in the first group. A routine software request does not. Publish the criteria so the ranking is not a matter of who sounded most anxious at 6 a.m.",
      "## Require an acceptance step\n\nThe incoming agent marks each item as accepted, returned for missing context, or reassigned. Accepted means the incoming agent can state the next action without asking a question. Returned items get a reason code: missing evidence, unclear owner, wrong queue, or insufficient context. This step turns the handoff from a broadcast into a control.",
      "## Keep one channel of record\n\nPut the handoff in the ticketing system or the approved shift log, not in a chat thread that scrolls away. Chat can alert the incoming agent that the log is ready, but the log is the record. Do not maintain a parallel spreadsheet unless it is generated from the same source. When the two disagree, the newest one wins and the other becomes a source of error.",
      "## Protect sensitive context\n\nHandoffs often include identity, payroll, or customer dispute details. Share only what the next action requires, and use the restricted record for anything sensitive. Do not paste credentials or full account numbers into a shift note. If the next shift needs access to a protected record, route the access request through the approved process rather than attaching the record.",
      "## Review the handoff, not just the tickets\n\nAt the weekly review, sample three handoffs and ask whether the incoming agent could act without a follow-up question. Count returns by reason and look for patterns. A recurring missing field is a template problem. A recurring wrong owner is a routing problem. A recurring urgent item is a planning problem."
    ],
    "sources": [
      {
        "name": "NIST SP 800-61 Rev. 3, Incident Response Recommendations",
        "url": "https://csrc.nist.gov/pubs/sp/800/61/r3/final"
      },
      {
        "name": "Google Site Reliability Engineering, Managing Incidents",
        "url": "https://sre.google/sre-book/managing-incidents/"
      },
      {
        "name": "Atlassian, Incident Management Handbook",
        "url": "https://www.atlassian.com/incident-management/handbook"
      }
    ],
    "cta": {
      "href": "/contact",
      "label": "shift handoff review"
    }
  },
  {
    "slug": "helpdesk-service-catalog-entry-oct27",
    "title": "Design a Service Catalog Entry for a New Tier-One Queue",
    "excerpt": "A catalog entry is a promise with boundaries. Write the eligible requester, the evidence, the result, and the route for everything else.",
    "minutes": 8,
    "published": "2026-10-27",
    "heroImage": "/aug19-heroes/helpdesk-service-catalog-entry-oct27.svg",
    "body": [
      "## The entry is the first triage decision\n\nCustomers choose a catalog item, and that choice shapes the queue, the evidence, and the expectations. A vague entry such as \"IT support\" sends everything into one lane and forces the agent to re-interview the requester. A useful entry names one recognizable outcome and the conditions under which support can deliver it.",
      "## Write the eligible requester and the exclusions\n\nState who can request the service: employees, contractors, a named department, or a client tenant. Then state who cannot, and where those requests should go. Exclusions are not unfriendly; they prevent a contractor from waiting three days for a service that requires an employee record. Put the exclusions where the requester sees them before submitting.",
      "## List the required evidence\n\nThe entry should ask only for facts that change the work: the affected device or account, the business need, the date required, and any approval reference. Mark optional fields as optional. Do not ask for a password, a recovery code, or an identity document in a general request form. If a protected step is needed, the workflow should route to the approved channel rather than collecting the secret in the ticket.",
      "## Define the result and the stopping point\n\nWrite what the customer receives when the request is complete: a configured account, a loaner device, a restored file, an appointment. Then write what the agent must not do. For a software installation, the stopping point might be a license approval or a security review. For an access request, it is the application owner's decision. The stopping point belongs in the entry, not only in internal notes.",
      "## Set the service window and the update rule\n\nGive the requester an honest window based on staffed hours, not an aspirational target. State when they will hear from support if the request cannot be completed immediately. A catalog entry that promises a two-hour resolution around the clock will generate escalations every night. A narrower promise that is kept builds more trust than a broad one that is not.",
      "## Test the entry with five requests\n\nBefore launch, send five realistic requests through the entry: one ordinary, one missing a required fact, one from an excluded requester, one that needs approval, and one that is really an incident. Check where each one lands and what the requester sees. Fix the form or the routing before the queue opens. A test with only the ordinary case proves very little.",
      "## Review demand after the first month\n\nLook at submissions, misroutes, abandoned forms, and requests that arrived through another channel. A high abandonment rate may mean the form asks too much. A high misroute rate may mean the entry overlaps with another one. Update the entry and record the change so the queue's history remains understandable."
    ],
    "sources": [
      {
        "name": "Atlassian, Jira Service Management Documentation",
        "url": "https://support.atlassian.com/jira-service-management-cloud/"
      },
      {
        "name": "NIST SP 800-53 Rev. 5, Security and Privacy Controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      },
      {
        "name": "CISA, Require Multifactor Authentication",
        "url": "https://www.cisa.gov/secure-our-world/require-multifactor-authentication"
      }
    ],
    "cta": {
      "href": "/contact",
      "label": "service catalog review"
    }
  },
  {
    "slug": "helpdesk-loaner-device-asset-trail-oct27",
    "title": "Triage Loaner Device Requests With an Asset Trail",
    "excerpt": "A loaner is a custody transfer. Track the asset, the return date, the data boundary, and the owner who accepts the risk.",
    "minutes": 8,
    "published": "2026-10-27",
    "heroImage": "/aug19-heroes/helpdesk-loaner-device-asset-trail-oct27.svg",
    "body": [
      "## Treat the loaner as an asset event\n\nA loaner request is not only a support ticket. It moves a company asset into someone's hands, often with access to email and files. The queue needs an asset record, a return commitment, and a named owner for exceptions. Without those three, the device becomes untracked inventory and the data on it becomes an unmanaged risk.",
      "## Confirm eligibility and business need\n\nCheck that the requester is eligible for a loaner under the current policy, which may exclude contractors or require a manager approval above a certain duration. Record the business need and the expected duration. A request for an indefinite loaner is a signal to route the decision rather than to issue the device and hope someone follows up.",
      "## Prepare the device before handover\n\nThe standard build should be applied, the previous user's profile removed, disk encryption confirmed, and the asset tag recorded. Do not hand over a device with a former user's cached credentials or local files. If the standard build is unavailable, the security owner decides whether an exception is acceptable. The agent records the build version and the checks performed.",
      "## Capture the custody record\n\nRecord the asset tag, serial number, requester, issue date, expected return date, accessories, condition, and the person who handed it over. Give the requester a short note explaining the return expectation and whom to contact if the device fails. The record should be findable by asset tag and by requester, because returns often arrive through a different person than the one who issued the device.",
      "## Set the data boundary\n\nExplain what the requester may store on the device and what must stay in approved systems. If the device is shared or temporary, discourage local copies of sensitive files. Do not install unapproved software to make the loaner more convenient. A support agent can explain the rule but should not grant an exception to it.",
      "## Handle the return and the wipe\n\nOn return, check the accessories, record the condition, remove the user profile, and confirm the device is ready for the next person. If the device is lost or damaged, route the loss report to the asset owner and follow the security process. Do not reuse a device that has an unresolved loss or malware report.",
      "## Review overdue loaners weekly\n\nA simple weekly list of devices past their return date prevents a quiet accumulation of hardware. Contact the requester with a factual reminder, and escalate to the manager or asset owner when the device is overdue beyond the policy window. Track the count and the age. Repeated overdue loans usually mean the return process is unclear, not that everyone is careless."
    ],
    "sources": [
      {
        "name": "NIST SP 800-53 Rev. 5, Security and Privacy Controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      },
      {
        "name": "NIST SP 800-46 Rev. 2, Guide to Enterprise Telework, Remote Access, and BYOD Security",
        "url": "https://csrc.nist.gov/pubs/sp/800/46/r2/final"
      },
      {
        "name": "CISA, Cyber Essentials",
        "url": "https://www.cisa.gov/cyber-essentials"
      }
    ],
    "cta": {
      "href": "/contact",
      "label": "asset handoff review"
    }
  },
  {
    "slug": "helpdesk-phishing-report-intake-oct27",
    "title": "Intake Phishing Reports Without Becoming the Security Team",
    "excerpt": "The help desk should preserve the report, contain the obvious risk, and hand the investigation to the security owner.",
    "minutes": 9,
    "published": "2026-10-27",
    "heroImage": "/aug19-heroes/helpdesk-phishing-report-intake-oct27.svg",
    "body": [
      "## Take the report seriously and calmly\n\nA user who forwards a suspicious message has done the right thing. The first response should acknowledge the report and explain what happens next, without asking the user to investigate or to confront the sender. The agent's job is to preserve the evidence, reduce immediate exposure within the approved scope, and route the message to the security owner.",
      "## Preserve the original message\n\nAsk the user to forward the message as an attachment rather than a screenshot, and to avoid clicking links or opening attachments further. Record the sender, the recipient, the subject, the time received, and whether anyone else received it. Do not alter the original when forwarding. If the user already clicked, capture what happened without asking them to repeat the action.",
      "## Contain only what the desk is authorized to do\n\nDepending on the approved playbook, the agent may be able to quarantine the message, block the sender at the mail gateway, or reset a session through the identity tool. Each of these actions has an owner and a limit. The agent should not delete the only copy of the message, change mailbox rules, or disable an account without the security owner's direction.",
      "## Use a safe holding reply\n\nTell the user that the report has been received, that they should not interact further with the message, and that the security team will follow up if action is needed. Avoid confirming whether the message is malicious before the investigation. Avoid promising a timeline that the security team has not agreed to. A calm, specific holding reply reduces repeat reports and anxious follow-ups.",
      "## Route with a complete packet\n\nThe security ticket should include the original message, the reporter, the recipients, the time, any interaction by the user, the actions already taken, and the current state. Mark what is known and what is assumed. If the report involves credentials, payment, or a regulated data set, flag it in the subject so it reaches the right queue without being read in full by the general desk.",
      "## Handle the false alarm without discouraging reports\n\nMany reports are legitimate marketing mail or internal simulations. Close them with a short explanation of why they are safe, and thank the reporter. Do not scold or imply the user wasted time. A desk that punishes false alarms will receive fewer real reports, which is a worse outcome than a modest volume of noise.",
      "## Review the intake monthly\n\nCount reports, confirmed malicious messages, time to security acceptance, and repeat reporters. Look for a rise in reports after a simulation and a drop after a poorly handled false alarm. Update the user-facing guidance when the same confusion appears repeatedly. The metric that matters is not the number of reports but whether real ones arrive early enough to contain."
    ],
    "sources": [
      {
        "name": "CISA, Recognize and Report Phishing",
        "url": "https://www.cisa.gov/secure-our-world/recognize-and-report-phishing"
      },
      {
        "name": "NIST SP 800-61 Rev. 3, Incident Response Recommendations",
        "url": "https://csrc.nist.gov/pubs/sp/800/61/r3/final"
      },
      {
        "name": "NIST SP 800-53 Rev. 5, Security and Privacy Controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      }
    ],
    "cta": {
      "href": "/contact",
      "label": "phishing intake review"
    }
  },
  {
    "slug": "helpdesk-printer-offline-article-prerequisites-oct27",
    "title": "Write a Printer-Offline Article With Real Prerequisites",
    "excerpt": "Printer tickets fail when the article assumes the network, driver, and queue state. List the conditions before the steps.",
    "minutes": 7,
    "published": "2026-10-27",
    "heroImage": "/aug19-heroes/helpdesk-printer-offline-article-prerequisites-oct27.svg",
    "body": [
      "## Start with the environment the steps assume\n\nA printer-offline article that begins with \"remove and re-add the printer\" assumes the device is on the network, the driver is approved, and the user has permission to change printer settings. On a managed laptop, none of those may be true. The first section of the article should list the conditions, so an agent can tell within a minute whether the procedure applies.",
      "## Separate the user's view from the queue's view\n\nThe user sees an offline icon; the print server sees a queue, a driver, and a device state. Record both. Ask whether the printer works for a colleague on the same floor, whether the job is stuck in the queue, and whether the device shows an error. These three answers split the problem into user-side, queue-side, and device-side before anyone changes a setting.",
      "## Give safe steps with a stop rule\n\nRestarting the print spooler, clearing the user's stuck job, and re-adding an approved queue are usually safe and reversible. Editing the registry, installing an unapproved driver, or changing a network setting is not. State the stop rule next to the risky step: if the queue is missing from the approved list, route to the print owner rather than browsing for a driver.",
      "## Handle the shared-device case\n\nA printer that is offline for everyone is a device or network event, not a user problem. Check the device power and network status if the agent has a safe way to do so, then route to the facilities or network owner. Do not ask ten users to reinstall drivers for a device that is unplugged. The article should make this branch obvious.",
      "## Write the verification step\n\nThe ticket is not resolved when the icon changes. Ask the user to print a single test page and confirm the output location and time. Record the queue used and the result. If the test page prints elsewhere, the problem was a wrong default printer, which is a different fix and a useful pattern to track.",
      "## Keep the article current with the fleet\n\nPrinter models, drivers, and print servers change. Add a review trigger for a fleet refresh or a server migration. When a procedure stops working for several users, the article is a candidate for revision before the queue fills with the same ticket. Review the search terms too, because users describe the problem as \"printer not working\" far more often than \"offline queue\"."
    ],
    "sources": [
      {
        "name": "IETF RFC 8010, Internet Printing Protocol/1.1: Encoding and Transport",
        "url": "https://datatracker.ietf.org/doc/html/rfc8010"
      },
      {
        "name": "NIST SP 800-53 Rev. 5, Security and Privacy Controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      },
      {
        "name": "CISA, Cyber Essentials",
        "url": "https://www.cisa.gov/cyber-essentials"
      }
    ],
    "cta": {
      "href": "/contact",
      "label": "knowledge article review"
    }
  },
  {
    "slug": "helpdesk-ticket-quality-sampling-rubric-oct27",
    "title": "Sample Outsourced Ticket Quality Without Grading Personalities",
    "excerpt": "A rubric should test the record, the boundary, and the customer outcome, with evidence a second reviewer can reproduce.",
    "minutes": 8,
    "published": "2026-10-27",
    "heroImage": "/aug19-heroes/helpdesk-ticket-quality-sampling-rubric-oct27.svg",
    "body": [
      "## Decide what the sample is for\n\nA quality sample can support coaching, contract evidence, or process design. Each purpose needs a different sample and a different report. Mixing them produces a score that managers use to rank agents and agents distrust because it measures the wrong thing. State the purpose before selecting the tickets, and keep individual results separate from the aggregate trend.",
      "## Score observable attributes\n\nUse attributes a reviewer can verify from the record: the customer goal is stated, the verification step is documented, the action matches the approved procedure, the customer received a clear next step, sensitive data is minimized, and the ticket is closed with evidence. Avoid traits such as helpfulness or professionalism unless they are defined by concrete examples. A rubric that depends on tone invites disagreement that cannot be resolved.",
      "## Sample across outcomes and agents\n\nInclude resolved, returned, escalated, reopened, and still-open tickets. If the sample contains only closed tickets, it will miss the cases where the process failed. Spread the sample across shifts, channels, and request types so one busy lane does not dominate the result. Record the query and the inclusion rule so the sample can be rebuilt.",
      "## Calibrate reviewers on the same ten tickets\n\nHave two reviewers score the same small set independently, then compare. Disagreements usually point to a vague attribute or a missing definition. Revise the rubric and repeat before the main sample. Report inter-rater agreement as a count, not a claim of scientific validity. A rubric that two experienced reviewers cannot apply consistently is not ready for use.",
      "## Separate the agent from the system\n\nWhen a ticket scores poorly, ask whether the agent had the procedure, the permission, the time, and the information needed. A missing procedure is a knowledge problem. A missing permission is an access problem. A missing field is a form problem. A rushed closure after a backlog spike is a capacity problem. Record the contributing factor so the correction targets the system, not only the person.",
      "## Report distributions, not a single grade\n\nShow the percentage of tickets meeting each attribute, the sample size, and the confidence range if appropriate. A combined score can hide a serious weakness in one attribute, such as sensitive data handling. Report the attributes separately and highlight any ticket with a control failure regardless of the overall score.",
      "## Close the loop with a change\n\nEach review cycle should produce at most three changes: one to the procedure, one to the form or tool, and one to the coaching plan. Assign owners and dates. At the next cycle, check whether the attribute moved. A quality program that produces a report but no change is an expensive ritual."
    ],
    "sources": [
      {
        "name": "U.S. GAO, Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g"
      },
      {
        "name": "NIST SP 800-53 Rev. 5, Security and Privacy Controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      },
      {
        "name": "Atlassian, Jira Service Management Documentation",
        "url": "https://support.atlassian.com/jira-service-management-cloud/"
      }
    ],
    "cta": {
      "href": "/contact",
      "label": "quality sampling review"
    }
  },
  {
    "slug": "helpdesk-itsm-onboarding-limited-admin-oct27",
    "title": "Onboard an Outsourced Agent Into a Client ITSM Tool With Limited Admin",
    "excerpt": "You rarely get full administrator rights. Plan the onboarding around the permissions you can request, test, and remove.",
    "minutes": 8,
    "published": "2026-10-27",
    "heroImage": "/aug19-heroes/helpdesk-itsm-onboarding-limited-admin-oct27.svg",
    "body": [
      "## Start from the work, not the tool\n\nBefore requesting a role, list the actions the agent must perform: view tickets in the assigned queues, add internal notes, send approved replies, attach evidence, and route to a specialist. Then list the actions the agent must not perform: change SLA settings, edit workflows, export the full ticket database, or manage other users. The permission request should follow from that list, not from a generic template.",
      "## Ask for a role, not an admin account\n\nA named account with a scoped role is easier to audit and safer to remove than a shared admin login. If the client insists on an admin account because roles are not configured, treat that as a finding and ask for a temporary, time-bound exception with logging. Do not accept a shared account as the normal path. Shared credentials destroy the audit trail and make offboarding unreliable.",
      "## Test the boundaries before go-live\n\nCreate a test ticket and try the permitted actions. Then try one action that should be blocked, such as exporting the queue or editing a workflow, and confirm that it fails. Record the result. A permission that looks correct in the admin console may behave differently in the agent's view. The test is the only reliable evidence that the role matches the work.",
      "## Configure notifications and views carefully\n\nAn agent needs the queues, filters, and saved views that match the assigned work. Too many notifications create noise; too few hide new work. Set the views with the client's process owner and record the naming convention. Avoid personal filters that only one agent can see, because they disappear at reassignment and hide work from the team.",
      "## Write the local work instructions\n\nThe client's tool will have its own fields, statuses, and required notes. Write a short local guide that maps the client's terms to the actions the agent performs. Include screenshots only if they contain no customer data. Keep the guide versioned with the client onboarding record so a later change can be traced.",
      "## Plan the exit on day one\n\nRecord the account name, the role, the systems, the client administrator contact, and the removal steps. Set a review date for the access and a trigger for removal at assignment end. Offboarding should not depend on remembering which client had which tool. The record belongs with the assignment, not in someone's inbox.",
      "## Review the first two weeks\n\nAsk the agent which action was missing, which field was confusing, and which request had to be routed because the role was too narrow. Distinguish a genuine permission gap from a workaround the agent wanted for convenience. Adjust the role only with the client's approval, and record the change."
    ],
    "sources": [
      {
        "name": "NIST SP 800-53 Rev. 5, Security and Privacy Controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final"
      },
      {
        "name": "CISA, Require Multifactor Authentication",
        "url": "https://www.cisa.gov/secure-our-world/require-multifactor-authentication"
      },
      {
        "name": "Atlassian, Jira Service Management Documentation",
        "url": "https://support.atlassian.com/jira-service-management-cloud/"
      }
    ],
    "cta": {
      "href": "/contact",
      "label": "tool onboarding review"
    }
  },
  {
    "slug": "helpdesk-outage-status-update-dedup-oct27",
    "title": "Stop Duplicate Status Updates During an Outage",
    "excerpt": "One incident record, one update owner, and a single customer channel prevent five agents from sending five different truths.",
    "minutes": 7,
    "published": "2026-10-27",
    "heroImage": "/aug19-heroes/helpdesk-outage-status-update-dedup-oct27.svg",
    "body": [
      "## Name one update owner\n\nDuring an outage, everyone wants to reassure the customer. The result is often three slightly different messages in ten minutes, each with a different estimate. Assign one person to own the customer-facing update, one to own the technical investigation, and one to own the internal coordination. The help desk can feed information to the update owner without sending its own version.",
      "## Use one source of truth\n\nCreate a single incident record with the start time, affected services, known impact, current mitigation, next update time, and the name of the update owner. Link every related ticket to it. Agents should read the incident record before replying, not rely on a chat message that may be stale. When the record and the chat disagree, the record wins and the chat is corrected.",
      "## Write updates with four parts\n\nA useful update says what is affected, what the customer can do now, what the team is doing, and when the next update will arrive. Avoid guessing a restoration time unless the technical owner has confirmed it. Replace \"we are working on it\" with a specific next checkpoint. If there is no workaround, say so plainly rather than implying one exists.",
      "## Suppress duplicate outbound messages\n\nBefore sending a bulk update, check whether the same message has already gone to the affected group. Use a channel or tag that marks who has been notified. If a customer replies to an individual ticket, respond in the ticket but do not trigger a second company-wide notice. The goal is one clear message, not maximum coverage.",
      "## Give the desk a holding macro\n\nAgents need an approved reply for the period before the first official update. It should acknowledge the incident, state that the team is aware, point to the status channel, and give the next update time. It should not speculate about cause or resolution. A good holding macro prevents improvisation and reduces the number of conflicting messages.",
      "## Close with a short review\n\nAfter the incident, record the actual timeline, the updates sent, the customers who received them, and any duplicate or contradictory messages. Ask whether the update cadence was met and whether the content was accurate at the time. The review is about the communication path, not about finding someone to blame for the outage."
    ],
    "sources": [
      {
        "name": "Google Site Reliability Engineering, Managing Incidents",
        "url": "https://sre.google/sre-book/managing-incidents/"
      },
      {
        "name": "Atlassian, Incident Management Handbook",
        "url": "https://www.atlassian.com/incident-management/handbook"
      },
      {
        "name": "NIST SP 800-61 Rev. 3, Incident Response Recommendations",
        "url": "https://csrc.nist.gov/pubs/sp/800/61/r3/final"
      }
    ],
    "cta": {
      "href": "/contact",
      "label": "incident communication review"
    }
  },
  {
    "slug": "helpdesk-angry-requester-verification-boundary-oct27",
    "title": "De-escalate an Angry Requester Without Loosening Verification",
    "excerpt": "Empathy and identity checks are not opposites. A calm script can acknowledge frustration while keeping the protected step intact.",
    "minutes": 8,
    "published": "2026-10-27",
    "heroImage": "/aug19-heroes/helpdesk-angry-requester-verification-boundary-oct27.svg",
    "body": [
      "## Acknowledge the impact, not the accusation\n\nAn angry requester often says the company has wasted their day or that support is incompetent. The agent does not need to agree with the accusation to acknowledge the impact. A sentence such as \"I can hear that this has blocked your work, and I want to get you to the right next step\" is honest and does not concede a fact that has not been checked. Avoid defensive explanations of policy before the customer feels heard.",
      "## Keep the verification step in the same breath\n\nWhen a request touches an account, a payment, or personal data, the verification step stays. Explain it as protection for the customer: \"Before I can change anything on the account, I need to confirm two details so nobody else can make this change.\" Do not apologize for the check as if it were an inconvenience invented by the agent. Do not offer to skip it because the customer is upset.",
      "## Offer a bounded choice\n\nA person who feels trapped escalates. Offer two or three legitimate paths: continue the verification now, receive a callback at a specific time, or have the request routed to a named owner. Each option should have a real next step and an owner. Do not offer a path that does not exist just to end the call. A false option creates a second, worse conversation later.",
      "## Set the boundary once, calmly\n\nIf the customer becomes abusive, state the boundary in neutral language and describe what will happen next. For example: \"I want to help, and I need us to keep this conversation respectful. If it continues, I will end the call and follow up in writing.\" Then follow through. Do not negotiate the boundary repeatedly or match the tone. Record the incident factually.",
      "## Write the handoff while the context is fresh\n\nIf the request routes to an owner, record the customer's goal, the impact, the verification state, the exact request, and what has already been promised. Do not write a narrative of the argument. The receiving owner needs the facts and the remaining decision, not a transcript of the emotion.",
      "## Protect the agent too\n\nRepeated hostile contacts affect the person taking them. Give agents a way to flag a contact for review, a limit on consecutive difficult calls, and a supervisor who can take over. These are operational controls, not perks. A desk that expects agents to absorb unlimited hostility will see turnover, and turnover weakens every other control.",
      "## Review the pattern, not just the call\n\nIf the same issue produces angry contacts every week, the cause may be a broken promise, an unclear policy, or a slow approval that the customer cannot see. Group the contacts by trigger and route the finding to the owner who can change the process. De-escalation training helps, but it cannot fix a process that keeps creating the same frustration."
    ],
    "sources": [
      {
        "name": "NIST SP 800-63B, Digital Identity Guidelines",
        "url": "https://pages.nist.gov/800-63-4/sp800-63b.html"
      },
      {
        "name": "CISA, Require Multifactor Authentication",
        "url": "https://www.cisa.gov/secure-our-world/require-multifactor-authentication"
      },
      {
        "name": "UK ICO, Data Protection Principles",
        "url": "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles/a-guide-to-the-data-protection-principles/"
      }
    ],
    "cta": {
      "href": "/contact",
      "label": "escalation script review"
    }
  }
];
