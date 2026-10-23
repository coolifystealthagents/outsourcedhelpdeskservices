// Drop-in research module for coolifystealthagents/outsourcedhelpdeskservices.
// Matches the ResearchPost shape declared in app/sep24Research.ts and consumed by
// app/data.ts. All papers dated 2026-10-22. These are method and decision papers:
// they cite public guidance and propose a testable protocol. They do not report
// primary data or claim performance results for any provider.

export const oct22ResearchArticles = [
  {
    "slug": "helpdesk-first-contact-resolution-denominator-method",
    "title": "A Method for Testing First-Contact Resolution Denominators",
    "excerpt": "First-contact resolution is easy to quote and hard to defend. This protocol freezes the eligible population before anyone inspects outcomes.",
    "published": "2026-10-22",
    "sourceDate": "2026-10-22",
    "keyStats": [
      { "value": "6", "label": "denominator rules" },
      { "value": "5", "label": "adverse cases" }
    ],
    "body": [
      "## Research question\n\nHow does the choice of eligible population change a reported first-contact resolution rate, and what evidence does a buyer need before treating that rate as a service measure? The unit of analysis is one customer request followed from the first recorded contact through the first accepted outcome or the first handoff. The study does not estimate a universal benchmark. It tests whether a local definition can be reproduced by a second reviewer using the same records.",
      "## Why the denominator decides the story\n\nFirst-contact resolution usually means that the customer's issue was resolved in the first interaction without a reopen, a transfer, or a later contact about the same problem. Each of those words hides a decision. Is a transfer to a billing specialist still first contact for the support desk? Is a customer who replies with a thank-you a second contact? Is a request closed because the agent answered the question, or because the customer stopped responding? A numerator without a frozen denominator lets a provider improve the score by excluding difficult work. The method therefore starts with inclusion rules, not with the outcome data.",
      "## Freeze the population before looking\n\nWrite the eligible population in advance: channels, request types, account classes, service windows, and the observation period. Define the contact event, the resolution event, and the duplicate rule. Decide how to treat requests that arrive through two channels, requests that are split into child tickets, and requests that are reopened after a fixed window. Record the source system for each timestamp and the time zone used for the comparison. If a request changes scope during handling, keep the original record and analyze the new scope separately rather than merging them into one convenient case.",
      "## Build the evidence table\n\nFor each request, capture the customer goal, the channel, the arrival time, the first human response, the actions taken, the stated resolution, the customer confirmation if any, later contacts, and the final state. Mark each field as observed, supplied by an owner, inferred, or unknown. Preserve the original message reference without copying sensitive content into the study file. If two systems disagree about the close time, keep both values and name the system that governs the measure. The table should let a reviewer reconstruct why the case was counted or excluded.",
      "## Test the definition against adverse cases\n\nA definition that works only for simple password questions is not ready. Build a small set of cases before the main review: a request resolved with a workaround, a request resolved but reopened for a related issue, a request transferred and closed by another team, a request closed after the customer stopped responding, and a request that was never resolvable at first contact because it required a scheduled change. Decide in advance how each case should be classified. If the team cannot agree, the definition needs another revision, not a larger sample.",
      "## Separate resolution from closure\n\nClosure is a state in the ticketing system. Resolution is a claim about the customer's ability to continue. Measure both and report them side by side. A high closure rate with a low confirmed-resolution rate may indicate premature closing, incomplete answers, or a queue that pressures agents to clear the backlog. A lower closure rate with strong confirmation may be healthier. Include the customer's next action in the evidence: did they reply that it worked, use the product successfully, or ask the same question again? Absence of a reply is not confirmation.",
      "## Control for case mix\n\nCompare request types separately. Password resets, billing questions, and integration failures have different first-contact potential. A provider that handles mostly simple requests will look better than one that handles complex escalations, even if both perform well within their lanes. Report the mix and the counts for each type. If a combined rate is necessary for a dashboard, show the component rates beside it. Do not adjust the mix after seeing the result unless the adjustment rule was declared in advance.",
      "## Reviewer procedure\n\nGive two reviewers the same frozen definitions and a sample of records. Ask them to classify eligibility, resolution, and reopen independently. Compare the results and discuss every disagreement. Record the final disposition and the reason. A disagreement rate is not a failure of the reviewers; it is evidence about the clarity of the definition. If the reviewers consistently interpret a rule differently, rewrite the rule and rerun the sample. Do not average the two judgments and call the result objective.",
      "## Reporting template\n\nReport the population, period, channels, request types, eligible count, excluded count with reasons, observed sample, missing records, confirmed resolutions, unconfirmed closures, reopens, transfers, and the resulting rates with numerators and denominators. Add a short note on data quality and any known gaps. Distinguish operational measurement from a contractual service level. A buyer should be able to see how the number was produced and what it does not include before comparing it with another provider or another month.",
      "## Limitations\n\nThe method depends on record quality, consistent channel capture, and a stable definition of the same problem. Customers may resolve an issue without telling the support team. Agents may close tickets to meet a target. A short observation window can miss delayed reopens. The protocol also cannot prove that first-contact resolution is the right goal for every request type; some issues should be escalated on purpose. These limits belong in the report, not in a footnote that disappears from the dashboard.",
      "## Practical use\n\nRun the protocol on one request family before expanding it. Keep the raw case table and the definition version. Retest after a change in intake, staffing, tooling, or policy. If the rate moves, ask whether the population changed before assuming performance changed. The output is a defensible measurement conversation, not a single number that ends the conversation."
    ],
    "sources": [
      {
        "name": "Atlassian Support, What is an SLA?",
        "url": "https://support.atlassian.com/jira-service-management-cloud/docs/what-is-an-sla/",
        "note": "Service-level definitions and clock concepts. Checked October 22, 2026."
      },
      {
        "name": "NIST Special Publication 800-61 Revision 3, Incident Response Recommendations",
        "url": "https://csrc.nist.gov/pubs/sp/800/61/r3/final",
        "note": "Incident lifecycle and evidence context. Checked October 22, 2026."
      },
      {
        "name": "U.S. GAO, Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g",
        "note": "Provenance, completeness, and fitness-for-use questions. Checked October 22, 2026."
      }
    ],
    "related": [
      "helpdesk-reopen-taxonomy-study-design",
      "helpdesk-qa-sample-validity-method"
    ]
  },
  {
    "slug": "helpdesk-reopen-taxonomy-study-design",
    "title": "Designing a Reopen Taxonomy Study for Help Desk Queues",
    "excerpt": "A reopen is not one failure. This study separates unclear answers, incomplete fixes, new symptoms, and customer behavior before counting.",
    "published": "2026-10-22",
    "sourceDate": "2026-10-22",
    "keyStats": [
      { "value": "7", "label": "reopen classes" },
      { "value": "4", "label": "evidence checks" }
    ],
    "body": [
      "## Research question\n\nWhat does a reopened help desk ticket actually prove, and how can a queue classify reopens so that the count leads to a useful repair? The unit is one original request and its later contact about the same or a related problem. The study treats a reopen as an observable event with several possible causes, not as automatic evidence of agent error.",
      "## Why a single reopen rate misleads\n\nA reopen can mean the first answer was wrong, incomplete, or unclear. It can also mean the customer encountered a new symptom, ignored the instructions, waited too long, or replied to the survey instead of the fix. Combining these events into one rate rewards teams that discourage replies and punishes teams that invite confirmation. The first design task is therefore a taxonomy that a reviewer can apply from the record. The second is a rule for linking a later contact to the original request without guessing.",
      "## Define the linkage rule\n\nBefore sampling, decide how a later contact becomes a reopen. Use stable identifiers where possible: the same ticket, a linked child ticket, a reply in the same thread, or a documented reference by the customer. If the only signal is a similar subject line, label the link as probable and analyze it separately. Define the time window, the channels included, and the treatment of a contact that raises a different issue for the same account. Record the linking evidence so another reviewer can accept or reject the case.",
      "## Build seven classes\n\nA practical taxonomy includes: the first answer was factually wrong; the answer was correct but incomplete; the answer was correct but unclear; the fix did not hold; a new but related symptom appeared; the customer needed a different channel or language; and the contact was unrelated or purely administrative. Add an unknown class rather than forcing a case into a poor fit. Each class should point to a different owner and a different repair. A wrong answer needs source review. An unclear answer needs writing review. A fix that did not hold needs product or engineering review.",
      "## Separate agent, process, and product causes\n\nFor every reopen, ask where the defect originated. The agent may have skipped a verification step. The process may have required a workaround that only works temporarily. The product may have a bug that the support team cannot fix. The customer may have received a correct answer that did not match their actual environment. Record the most proximate cause and any contributing cause. Do not assign a single blame label when the evidence shows a chain. The purpose is to route the repair, not to rank people.",
      "## Sample for learning, not for a score\n\nSelect a consecutive set of reopens from a defined period, then add deliberate cases from each class if the natural sample is thin. Include reopens that were closed quickly, reopens that escalated, and reopens where the customer eventually succeeded. Compare them with a matched sample of tickets that did not reopen. The comparison helps separate a general queue problem from a problem specific to certain request types. Report the sampling rule and the exclusions.",
      "## Check the four evidence points\n\nFor each case, verify the original request, the first response, the later contact, and the final state. Confirm that the later contact is linked, that the customer's complaint is described in their own terms, and that the resolution claim is supported. Check whether the agent had access to the information needed at the time. A reopen caused by a missing knowledge article is a different finding from a reopen caused by an agent who ignored the article. Without the access check, the study will overstate individual error.",
      "## Measure repair, not just recurrence\n\nTrack the reopen count, the class distribution, the time to reopen, the time to second resolution, and the number of cases that required a different owner. Then track whether the identified repair was made: a source updated, a template rewritten, a product bug filed, a permission added, or a training gap addressed. A taxonomy that produces a beautiful chart but no change is not an operating study. Review the repairs at the next sample and see whether the same class persists.",
      "## Limitations\n\nCustomers do not always reopen through the same channel, and some give up instead of returning. A low reopen rate can therefore mean good service or a queue that is hard to re-enter. The taxonomy depends on record quality and reviewer judgment. Product defects may be invisible to the support team. The study should state these limits and avoid treating the reopen rate as a complete measure of quality.",
      "## Practical use\n\nStart with one request family and one month of reopens. Classify them with two reviewers, compare disagreements, and choose one repair for the largest actionable class. Repeat after the repair. The value is in the loop between the customer's second contact and the change that prevents the next one."
    ],
    "sources": [
      {
        "name": "NIST Special Publication 800-61 Revision 3, Incident Response Recommendations",
        "url": "https://csrc.nist.gov/pubs/sp/800/61/r3/final",
        "note": "Lifecycle and post-event review concepts. Checked October 22, 2026."
      },
      {
        "name": "Google Site Reliability Engineering Workbook, Postmortem Culture",
        "url": "https://sre.google/workbook/postmortem-culture/",
        "note": "Learning-oriented review practices. Checked October 22, 2026."
      },
      {
        "name": "U.S. GAO, Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g",
        "note": "Evidence provenance and completeness. Checked October 22, 2026."
      }
    ],
    "related": [
      "helpdesk-first-contact-resolution-denominator-method",
      "helpdesk-knowledge-gap-detection-method"
    ]
  },
  {
    "slug": "helpdesk-follow-the-sun-coverage-tradeoffs",
    "title": "Follow-the-Sun Coverage: A Bounded Tradeoff Study",
    "excerpt": "Around-the-clock coverage is a set of tradeoffs, not a staffing slogan. This protocol makes handoff cost, authority, and customer wait visible.",
    "published": "2026-10-22",
    "sourceDate": "2026-10-22",
    "keyStats": [
      { "value": "5", "label": "coverage models" },
      { "value": "6", "label": "handoff costs" }
    ],
    "body": [
      "## Research question\n\nWhen does follow-the-sun help desk coverage improve customer outcomes, and when does it add handoff cost without reducing the customer's wait? The unit is one request that crosses at least one shift or regional boundary. The study compares coverage models on time to first meaningful action, handoff loss, authority continuity, and customer-visible updates rather than on hours of nominal coverage alone.",
      "## Define the coverage models\n\nA useful comparison includes at least five models: a single daytime team with an on-call escalation path; an extended-hours team with a smaller evening crew; a true follow-the-sun rotation with regional teams; an asynchronous model with a next-morning review; and a vendor model with a defined overnight lane. Each model has a different cost structure and a different failure mode. Write the service window, the handoff points, the authority each shift holds, and the escalation route before collecting any data.",
      "## Measure the customer's clock\n\nNominal coverage can be 24 hours while the customer still waits because the overnight team cannot approve the action. Record the time from request to first human response, first meaningful action, decision, and accepted outcome. Separate provider-side processing, customer wait, third-party wait, and time outside the service window. A follow-the-sun model that responds quickly but hands off every decision may look fast on first response and slow on resolution. The customer experiences the whole chain, not the shift chart.",
      "## Count the handoff cost\n\nEvery handoff adds work: writing the note, reading it, verifying the state, finding the owner, and re-establishing trust with the customer. Measure the number of handoffs per request, the time spent on handoff, the rate of repeated questions, and the rate of contradictory updates. A handoff that transfers custody without loss is valuable. A handoff that merely moves a ticket to another queue is a delay with extra steps. Include the cost of the receiving team's context rebuild, not only the sender's note-writing time.",
      "## Check authority continuity\n\nA coverage model fails when the night shift can answer but cannot act. Map the decisions each shift may make: password resets, refunds under a threshold, access changes, incident declarations, customer credits, and external statements. If the overnight team must wake an owner for every protected decision, the model's real coverage is narrower than the roster suggests. Either delegate a bounded rule with evidence or state the wait honestly. Do not pretend that a warm body at a desk equals decision coverage.",
      "## Include the customer's channel and language\n\nCoverage is not only time. A customer who needs a phone call may not be served by an overnight chat queue. A customer who writes in a language the night team cannot review may wait for the day shift. Map the channels and languages available in each window. If an equivalent route is not available, say so in the service description. The accessibility and fairness implications belong in the study, not in a marketing claim about 24/7 support.",
      "## Compare with a matched sample\n\nSelect requests from the same request families across the coverage models. Match on impact, complexity, account class, and channel where possible. If matching is not feasible, report the differences instead of adjusting them away. Use a consistent definition of first meaningful action. Sample the handoff notes and the customer updates, not only the timestamps. A model can win on speed and lose on clarity, or the reverse.",
      "## Model the cost honestly\n\nInclude wages, shift differentials, management, tooling, handoff time, error correction, and the cost of unused capacity. Do not compare a fully loaded internal team with a vendor rate that excludes onboarding, equipment, and oversight. The cheapest model may also be the one with the highest customer wait or the highest risk of unauthorized action. Present the tradeoff as a set of explicit choices rather than a single efficiency score.",
      "## Limitations\n\nA short study cannot capture seasonal peaks, attrition, regional holidays, or a major incident. Time-zone data may be inconsistent. Customer satisfaction may reflect the outcome more than the coverage model. The study is descriptive and comparative; it does not prove that one model causes better outcomes. Use it to frame a bounded pilot, not to declare a universal staffing answer. Record the roster, the actual coverage, and the absence of coverage separately, because a schedule that exists on paper may not be filled on the night the sample was taken.",
      "## Decision record\n\nClose the study with a one-page decision record: the models compared, the request family, the observation window, the measured waits, the handoffs reviewed, the authority gaps found, and the change selected. Name the owner, the cost, the expected effect, and the date of the retest. If the evidence does not support a change, say so and keep the current model rather than adopting a more complex roster without a reason.",

      "## Practical use\n\nPick one request family and one cross-shift failure that matters. Run the measurement for a month, review the handoffs with both shifts, and choose one change: a delegated authority, a better note template, a channel extension, or a narrower service promise. Retest before expanding the model."
    ],
    "sources": [
      {
        "name": "Google Site Reliability Engineering, Managing Incidents",
        "url": "https://sre.google/sre-book/managing-incidents/",
        "note": "Roles, coordination, and incident communication. Checked October 22, 2026."
      },
      {
        "name": "NIST Special Publication 800-53 Revision 5, Security and Privacy Controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
        "note": "Access and accountability control context. Checked October 22, 2026."
      },
      {
        "name": "World Bank, Philippines Overview",
        "url": "https://www.worldbank.org/en/country/philippines/overview",
        "note": "Country context for Philippines-based service teams. Checked October 22, 2026."
      }
    ],
    "related": [
      "helpdesk-first-contact-resolution-denominator-method",
      "helpdesk-qa-sample-validity-method"
    ]
  },
  {
    "slug": "helpdesk-knowledge-gap-detection-method",
    "title": "Detecting Knowledge Gaps From Failed Searches and Repeats",
    "excerpt": "A knowledge gap is a measurable mismatch between customer language, search results, and the answer an agent actually needs.",
    "published": "2026-10-22",
    "sourceDate": "2026-10-22",
    "keyStats": [
      { "value": "6", "label": "gap signals" },
      { "value": "3", "label": "review passes" }
    ],
    "body": [
      "## Research question\n\nWhich signals reliably indicate that a help desk knowledge base is missing or mislabeling an answer, and how can a team distinguish a content gap from a search, routing, or product problem? The unit is one search or one repeated question linked to the article set shown and the action the agent took next.",
      "## Start with the customer's language\n\nKnowledge gaps are often described in internal vocabulary. Customers use different words for the same problem. Capture the query as entered, the channel, the product or service, and the result the customer was trying to achieve. Do not clean up the query before storing it. The misspelling, the regional term, and the vague phrase are evidence about how people search. Group queries by intent after collection, not by rewriting them into the taxonomy you wish customers used.",
      "## Use six signals\n\nA practical signal set includes: a search with no clicks; a search followed by a contact within the same session; a repeated question from multiple customers within a short window; an agent opening several articles and then escalating; a ticket reopened after an article was sent; and a manual workaround used repeatedly. Each signal has a different false-positive rate. A no-click search may mean the answer was visible in the snippet. A repeated question may reflect a product change rather than a missing article. Use at least two signals before declaring a gap.",
      "## Inspect the result set, not only the query\n\nFor each candidate gap, record the top results, their titles, their last review dates, and the step where the customer or agent stopped. A relevant article with an unclear title is a labeling problem. A correct article buried below an outdated one is a ranking or retirement problem. No article at all is a content gap. An article that answers a different product version is a version problem. These need different owners and different fixes.",
      "## Read the ticket that followed\n\nA search is only a proxy for need. Read the contact or the agent's note that followed the search. Identify the actual question, the missing fact, and the workaround used. If the agent solved the issue with a sentence that is not in any article, that sentence is a candidate for the knowledge base. If the agent needed a system permission or a product fix, the gap is not a writing problem. Classify the proximate cause before assigning the article.",
      "## Run three review passes\n\nFirst, a volume pass: which gaps appear most often and affect the most customers? Second, a risk pass: which gaps touch access, money, safety, legal rights, or protected data? Third, a feasibility pass: which gaps can be fixed with the available source owner and review capacity? A high-volume cosmetic gap may be less urgent than a low-volume access gap. A gap that no one can own will not be fixed by adding it to a backlog. Rank by risk and feasibility, not volume alone.",
      "## Fix the system around the article\n\nSome gaps require more than a new page. Add synonyms to search, improve the intake form so the customer's goal is captured, split a long article, retire an obsolete one, or add a related-article link. Measure the effect on the original signal: does the no-click search now lead to a click, does the repeated question decline, does the agent stop escalating? If the signal does not move, the fix may have addressed the wrong cause. Keep the baseline and the retest date.",
      "## Avoid counting the same gap twice\n\nDeduplicate by intent and by source, not by exact query text. Two different phrasings may point to the same missing answer. Conversely, one phrase may hide two different product problems. Use a stable gap identifier and link all related queries and tickets to it. Record when a gap is merged, split, or closed. This prevents a dashboard from showing fifty gaps when there are five underlying issues.",
      "## Limitations\n\nSearch logs may omit voice calls, chat, and informal help. A repeated question can reflect a confusing product rather than a missing article. Article views do not prove comprehension. The method depends on access to queries and tickets under the organization's privacy rules. It should not be used to monitor individual agents or customers. The output is a prioritized learning agenda, not a complete map of everything the support team knows. Keep the raw query set under the same retention rule as other support records, and remove personal data before sharing the analysis outside the review group.",
      "## Practical use\n\nRun the method monthly on one product area. Review the top risk-weighted gaps with the article owners, choose a small number of fixes, and retest the same signals. Publish the closure reason so the team can see the difference between a written answer, a search improvement, and a product change."
    ],
    "sources": [
      {
        "name": "W3C Web Content Accessibility Guidelines 2.2",
        "url": "https://www.w3.org/TR/WCAG22/",
        "note": "Content structure and accessibility criteria. Checked October 22, 2026."
      },
      {
        "name": "W3C WAI, Use Clear and Understandable Content",
        "url": "https://www.w3.org/WAI/WCAG2/supplemental/objectives/o3-clear-content/",
        "note": "Clear-language guidance for reader comprehension. Checked October 22, 2026."
      },
      {
        "name": "U.S. GAO, Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g",
        "note": "Data provenance and fitness-for-use review. Checked October 22, 2026."
      }
    ],
    "related": [
      "helpdesk-reopen-taxonomy-study-design",
      "helpdesk-first-contact-resolution-denominator-method"
    ]
  },
  {
    "slug": "helpdesk-qa-sample-validity-method",
    "title": "A Validity Check for Help Desk QA Sampling",
    "excerpt": "A QA score is only as good as the sample behind it. Test coverage, selection bias, rubric clarity, and reviewer agreement before trusting the number.",
    "published": "2026-10-22",
    "sourceDate": "2026-10-22",
    "keyStats": [
      { "value": "5", "label": "validity threats" },
      { "value": "4", "label": "agreement tests" }
    ],
    "body": [
      "## Research question\n\nWhat makes a help desk quality assurance sample valid enough to support a coaching decision, a vendor review, or a service claim? The unit is one sampled ticket and the review record attached to it. The study examines coverage, selection, rubric clarity, reviewer agreement, and the link between the score and the customer outcome.",
      "## Check what the sample leaves out\n\nStart with the population. Which channels, request types, shifts, agents, and account classes are eligible? Which are excluded because the tool cannot export them, the data is sensitive, or the reviewer is unfamiliar with the product? A sample drawn only from closed tickets excludes unresolved work, which is often the most informative. A sample drawn only from one shift excludes handoff failures. Report the frame and the exclusions before reporting the score.",
      "## Test selection bias\n\nRandom sampling is better than convenience sampling, but it is not automatically representative. Check whether the sample overrepresents easy tickets, long tickets, or tickets from agents who are already under review. If reviewers choose their own cases, the sample reflects what they expect to find. Use a declared selection rule, a random seed where possible, and a minimum count per stratum. If a stratum is too small to sample, say so rather than merging it into a larger group and hiding the gap.",
      "## Make the rubric observable\n\nA rubric item such as 'professional tone' invites disagreement. Replace it with observable criteria: the reply states the next action, names the owner, gives a date, avoids unsupported promises, and uses the approved verification step. For each item, write what a pass and a fail look like, and what evidence the reviewer must cite. A score without a cited ticket passage is an opinion. The rubric should also distinguish an agent error from a source, tool, or policy defect that the agent could not control.",
      "## Measure reviewer agreement\n\nHave two reviewers score the same sample independently. Compare exact agreement and agreement within one point. Review every disagreement and record whether the rubric, the evidence, or the reviewer's product knowledge caused it. A low agreement rate means the score is not ready for high-stakes use. Calibration should happen before the review cycle, not after a disputed result. Retain the initial scores so the calibration discussion does not erase the disagreement.",
      "## Connect the score to an outcome\n\nA QA score should predict something the customer cares about: a correct answer, a safe action, a resolved request, or a clear next step. If the highest-scoring tickets have the same reopen rate as the lowest-scoring ones, the rubric may be measuring style rather than quality. Compare a sample of high, medium, and low scores against reopen, escalation, customer follow-up, and evidence completeness. The comparison does not prove causation, but it can reveal a rubric that rewards the wrong behavior.",
      "## Sample adverse cases deliberately\n\nA random sample may contain few security, money, or access cases. Add a targeted sample of those cases, analyzed separately. Include correct stops as well as failures. An agent who refuses an unverified reset is demonstrating quality even though the ticket may look unresolved. If the rubric scores only closure, it will punish the right behavior. The targeted sample should have its own criteria and its own review owner.",
      "## Report with uncertainty\n\nShow the sample size, the population, the selection rule, the exclusions, the score distribution, and the confidence interval where appropriate. Do not present a single percentage as if it described every agent and every request type. Segment by request family and by risk. If the sample is too small to support a claim, say that. A cautious statement is more useful than a precise number built on ten convenience cases.",
      "## Limitations\n\nQA sampling observes the record, not the customer's full experience. Reviewers may be influenced by the agent's name, the customer's tone, or the outcome. The rubric may encode local preferences that do not generalize. A valid sample for coaching may be too small for a contractual claim. These limits should shape the decision, not be buried in an appendix. Where a score is used in a vendor review, keep the sampled tickets, the rubric version, and the reviewer notes available for the buyer's own review, subject to privacy and access controls.",
      "## Decision record\n\nRecord the sample frame, the selection method, the rubric version, the reviewers, the agreement result, the outcome comparison, and the limitations in one page. State whether the score is fit for coaching, for a vendor review, or only for exploration. Name the next calibration date and the owner of the rubric. A score that cannot be explained at this level of detail should not be used to make a personnel or contract decision.",

      "## Practical use\n\nAudit one QA cycle before changing the score. Check the frame, the selection, the rubric, and the agreement. Fix the weakest link, then rerun the same sample. A QA program earns trust by showing its work, not by producing a confident number."
    ],
    "sources": [
      {
        "name": "U.S. GAO, Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g",
        "note": "Data quality and fitness-for-use framework. Checked October 22, 2026."
      },
      {
        "name": "NIST Special Publication 800-53 Revision 5, Security and Privacy Controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
        "note": "Audit and accountability control context. Checked October 22, 2026."
      },
      {
        "name": "Google Site Reliability Engineering Workbook, Postmortem Culture",
        "url": "https://sre.google/workbook/postmortem-culture/",
        "note": "Learning review and blame-free analysis concepts. Checked October 22, 2026."
      }
    ],
    "related": [
      "helpdesk-first-contact-resolution-denominator-method",
      "helpdesk-reopen-taxonomy-study-design"
    ]
  }
];
