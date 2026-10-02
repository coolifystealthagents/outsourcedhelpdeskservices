import { oct02ResearchSupplements } from './oct02ResearchSupplements';
type Source={name:string;url:string;note:string};
type Post={slug:string;title:string;excerpt:string;published:string;sourceDate:string;hero:string;keyStats:{value:string;label:string}[];body:string[];sources:Source[];related:string[]};
const oct02ResearchBase:Post[]=[
  {
    "slug": "outsourced-helpdesk-ai-summary-evidence-loss-study",
    "title": "AI ticket summaries in outsourced help desks: what evidence disappears?",
    "excerpt": "A reconstruction study testing whether generated ticket summaries preserve customer goals, uncertainty, permissions, and promises.",
    "published": "2026-10-02",
    "sourceDate": "2026-10-02",
    "hero": "/research-thumbnails/helpdesk-ticket-evidence-research.svg",
    "keyStats": [
      {
        "value": "5",
        "label": "coded evidence fields"
      },
      {
        "value": "3",
        "label": "paired case tests"
      }
    ],
    "body": [
      "Research question: can an AI-generated ticket summary shorten reconstruction without erasing the traceable material that controls scope, safety, or ownership? The decision matters because an outsourced help desk works from bounded traceable material while the service buyer retains authority over protected outcomes. This study does not assume that faster handling is better. It asks whether the case history lets another person reconstruct what was observed, what remained uncertain, which rule controlled the workflow path, and who accepted the next decision. The unit of analysis is ticket summaries paired with their source events. A useful result must improve the buyer's operating design without inventing company performance, universal targets, or permission that the local service catalogue does not grant.",
      "Methodology: create a fixed reconstruction window and declare exclusions before outcomes are inspected. Code requester goal, reported versus verified facts, explicit unknowns, authorization traceable material, and promised checkpoint. Preserve the requester's words separately from tool events and analyst interpretation. Sample routine completions, clean escalations, returned handoffs, and cases discovered later through repeat contact. Case history the workflow version and traceable material available at the moment of action; later knowledge must not be treated as if the frontline analyst already possessed it. Use two reviewers for ambiguous cases, retain disagreement, and assign a source decision steward when the rule itself cannot answer the case.",
      "The first comparison uses a long password-recovery thread whose final message changes the affected account. Reviewers should identify the smallest fact that changes the safe workflow path, then test a near-neighbour where that fact is absent. The exercise is not a memory quiz. It reveals whether the interface, article, or decision steward map exposes the deciding traceable material when work occurs. A analyst who follows an unusable rule should not be scored the same as one who ignores a clear boundary. Separate missing traceable material, inaccessible traceable material, ambiguous wording, tool failure, and unsupported judgement so remediation reaches the party able to change the system.",
      "The second comparison uses a bug report where the generated summary states a cause that engineering never confirmed. Facts are preserved events or approved records. Analysis connects those facts to a documented workflow. Inference is a plausible explanation that still needs confirmation. Unknowns remain explicit. Requester language must not promote an inference into an outcome: “routed for reconstruction” is different from “approved,” and “an action was attempted” is different from “the requested result occurred.” This traceable material ladder makes the handoff useful across shifts and vendors because each reader can see the strongest supported claim without reconstructing a hidden conversation.",
      "Source interpretation is deliberately bounded. NIST material supports explicit roles, traceable material, preparation, response, and improvement; it does not prescribe this site's ticket fields or prove a local incident. CISA Secure by Design supports safe defaults and responsibility with organizations able to reduce systemic risk. ICO principles support purpose limitation, minimisation, accuracy, security, retention, and accountability where applicable. WCAG 2.2 supports accessible interactions. None of these sources supplies local volumes, service levels, authorization, jurisdictional conclusions, or measured company results. Those inputs must come from approved first-party traceable material and accountable owners.",
      "Pilot design begins in shadow mode. Apply the proposed classification without changing live authority, compare it with the current decision steward's decision, and case history why results differ. Include ordinary cases, protected stops, missing-data cases, and near-neighbours. Permit automation only for stable clerical steps whose errors remain visible and reversible. Re-run the challenge set after a source, integration, permission, product, or decision steward changes. A sample size alone does not prove readiness; coverage of meaningful failure modes, reviewer agreement on the decision boundary, and decision steward acceptance of the handoff are stronger launch traceable material.",
      "Limitations: Generative systems and configurations change, source transcripts may themselves be incomplete, and reviewer recall can favour concise prose. Ticket records can omit calls, private tools, or context available only to the service buyer. Reviewer knowledge introduces hindsight, rare events may not appear, and synthetic cases cannot prove every production integration. The protocol cannot certify compliance, determine liability, establish staffing sufficiency, or promise a requester outcome. Findings belong to the declared window, population, workflow version, channels, and authority map. Publish uncertainty and unavailable traceable material instead of converting a bounded reconstruction into a universal benchmark.",
      "Traceable material-led conclusion: AI summaries are usable only when critical traceable material remains traceable to source events and unsupported certainty cannot silently control the workflow path. For a buyer of outsourced tier-one support, the practical test is whether the operating lane produces a reconstructable case history, a safe stopping point, an accepted next decision steward, and an honest requester checkpoint. That is narrower than transferring full operational authority, but it is valuable and measurable. Reconstruction the decision interface after material changes, keep protected traceable material at its approved source, and judge success from supported outcomes and corrected system conditions rather than activity counts alone."
    ],
    "sources": [
      {
        "name": "NIST AI Risk Management Framework",
        "url": "https://www.nist.gov/itl/ai-risk-management-framework",
        "note": "Checked 2026-10-02. Primary voluntary framework for governing and measuring AI risks."
      },
      {
        "name": "NIST SP 800-61 Rev. 3 — Incident Response Recommendations and Considerations",
        "url": "https://csrc.nist.gov/pubs/sp/800/61/r3/final",
        "note": "Checked 2026-10-02. Primary guidance on incident-response roles, preparation, detection, response, and improvement."
      },
      {
        "name": "ICO — A guide to the data protection principles",
        "url": "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles/a-guide-to-the-data-protection-principles/",
        "note": "Checked 2026-10-02. Regulator guidance on purpose limitation, minimisation, accuracy, security, retention, and accountability."
      },
      {
        "name": "CISA Secure by Design",
        "url": "https://www.cisa.gov/securebydesign",
        "note": "Checked 2026-10-02. Authoritative principles for safe defaults and organizational responsibility."
      }
    ],
    "related": [
      "helpdesk-ticket-evidence-research",
      "helpdesk-handoff-context-loss-research"
    ]
  },
  {
    "slug": "outsourced-helpdesk-remote-session-consent-study",
    "title": "Remote support sessions: testing consent, scope, and the stopping point",
    "excerpt": "Research on whether remote-assistance records prove the agreed task without turning screen access into unrestricted authority.",
    "published": "2026-10-02",
    "sourceDate": "2026-10-02",
    "hero": "/research-thumbnails/helpdesk-account-change-research.svg",
    "keyStats": [
      {
        "value": "5",
        "label": "coded evidence fields"
      },
      {
        "value": "3",
        "label": "paired case tests"
      }
    ],
    "body": [
      "Research question: what session proof should an outsourced help desk require before, during, and after a remote support session? The decision matters because an outsourced help desk works from bounded session proof while the contracting organization retains authority over protected outcomes. This study does not assume that faster handling is better. It asks whether the session log lets another person reconstruct what was observed, what remained uncertain, which rule controlled the assistance path, and who accepted the next decision. The unit of analysis is remote-assistance requests and session records. A useful result must improve the buyer's operating design without inventing company performance, universal targets, or permission that the local service catalogue does not grant.",
      "Operating boundary: A remote technician may start the approved tool for the declared task, narrate actions, stop when scope changes, and preserve minimal session session proof. Put the stopping point beside the permitted action, not in a distant policy page. The remote technician may preserve the signal, use approved tooling, state a non-sensitive status, and obtain acceptance from the named control holder. The remote technician should not broaden access, make legal or security determinations, promise a protected outcome, or substitute familiarity for authorization. If the primary control holder is unavailable, a documented backup assistance path and participant checkpoint are required; absence does not transfer decision rights to the queue by default.",
      "The third comparison uses an administrator asks tier one to make an unlisted configuration change during troubleshooting. Run it across supported channels and shifts because a control available in a portal may disappear in email, chat, or a phone note. Check what is copied when a participant changes channel and what is merely linked at its approved source. Minimise personal or restricted data in calibration sets, exports, screenshots, and reviewer messages. Accessibility is part of the control: warnings, status labels, and error recovery must be perceivable and understandable before the risky action, with an authorized alternative that preserves the same boundary.",
      "Methodology: create a fixed scope check window and declare exclusions before outcomes are inspected. Code requester identity result, stated support outcome, approved device and application scope, consent checkpoint, and session termination session proof. Preserve the participant's words separately from tool events and remote technician interpretation. Sample routine completions, clean escalations, returned handoffs, and cases discovered later through repeat contact. Session log the workflow version and session proof available at the moment of action; later knowledge must not be treated as if the frontline remote technician already possessed it. Use two reviewers for ambiguous cases, retain disagreement, and assign a source control holder when the rule itself cannot answer the case.",
      "The first comparison uses a user requests help with one application while unrelated confidential windows are open. Reviewers should identify the smallest fact that changes the safe assistance path, then test a near-neighbour where that fact is absent. The exercise is not a memory quiz. It reveals whether the interface, article, or control holder map exposes the deciding session proof when work occurs. A remote technician who follows an unusable rule should not be scored the same as one who ignores a clear boundary. Separate missing session proof, inaccessible session proof, ambiguous wording, tool failure, and unsupported judgement so remediation reaches the party able to change the system.",
      "Measurement should report denominators and layers rather than a single quality percentage. Count eligible remote-assistance requests and session records, records with required session proof, protected signals, correctly stopped actions, control holder acceptance, returned handoffs, repeat contacts, participant checkpoints, and verified outcomes. Report time to assistance path separately from time to acceptance and time to result. A rapid transfer that nobody accepts has not created ownership. A cautious escalation later found benign may still be correct under the declared risk rule. Interpret changes with workflow, mix, coverage, and detection history rather than claiming causation from a before-and-after chart.",
      "Pilot design begins in shadow mode. Apply the proposed classification without changing live authority, compare it with the current control holder's decision, and session log why results differ. Include ordinary cases, protected stops, missing-data cases, and near-neighbours. Permit automation only for stable clerical steps whose errors remain visible and reversible. Re-run the challenge set after a source, integration, permission, product, or control holder changes. A sample size alone does not prove readiness; coverage of meaningful failure modes, reviewer agreement on the decision boundary, and control holder acceptance of the handoff are stronger launch session proof.",
      "Limitations: Session logs vary by product, visible consent may not establish organizational authority, and observation cannot prove what happened outside the captured session. Ticket records can omit calls, private tools, or context available only to the contracting organization. Reviewer knowledge introduces hindsight, rare events may not appear, and synthetic cases cannot prove every production integration. The protocol cannot certify compliance, determine liability, establish staffing sufficiency, or promise a participant outcome. Findings belong to the declared window, population, workflow version, channels, and authority map. Publish uncertainty and unavailable session proof instead of converting a bounded scope check into a universal benchmark.",
      "Session proof-led conclusion: remote support is a bounded interaction whose consent, task scope, privilege, and termination must be independently observable. For a buyer of outsourced tier-one support, the practical test is whether the operating lane produces a reconstructable session log, a safe stopping point, an accepted next control holder, and an honest participant checkpoint. That is narrower than transferring full operational authority, but it is valuable and measurable. Scope check the decision interface after material changes, keep protected session proof at its approved source, and judge success from supported outcomes and corrected system conditions rather than activity counts alone."
    ],
    "sources": [
      {
        "name": "NIST SP 800-63-4 — Digital Identity Guidelines",
        "url": "https://csrc.nist.gov/pubs/sp/800/63/4/final",
        "note": "Checked 2026-10-02. Primary guidance on identity proofing, authentication, and authenticator management."
      },
      {
        "name": "CISA Secure by Design",
        "url": "https://www.cisa.gov/securebydesign",
        "note": "Checked 2026-10-02. Authoritative principles for safe defaults and organizational responsibility."
      },
      {
        "name": "ICO — A guide to the data protection principles",
        "url": "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles/a-guide-to-the-data-protection-principles/",
        "note": "Checked 2026-10-02. Regulator guidance on purpose limitation, minimisation, accuracy, security, retention, and accountability."
      },
      {
        "name": "Web Content Accessibility Guidelines (WCAG) 2.2",
        "url": "https://www.w3.org/TR/WCAG22/",
        "note": "Checked 2026-10-02. W3C Recommendation for accessible digital content."
      }
    ],
    "related": [
      "helpdesk-account-access-support-research",
      "helpdesk-customer-consent-research"
    ]
  },
  {
    "slug": "outsourced-helpdesk-multilingual-escalation-fidelity-study",
    "title": "Multilingual help desk escalation: does the decision survive translation?",
    "excerpt": "A paired-language study of whether impact, uncertainty, urgency, and protected routing remain equivalent across support channels.",
    "published": "2026-10-02",
    "sourceDate": "2026-10-02",
    "hero": "/research-thumbnails/helpdesk-email-triage-research.svg",
    "keyStats": [
      {
        "value": "5",
        "label": "coded evidence fields"
      },
      {
        "value": "3",
        "label": "paired case tests"
      }
    ],
    "body": [
      "Research question: does a multilingual escalation preserve the facts and boundaries that the receiving receiving authority needs to make the same decision? The decision matters because an outsourced help desk works from bounded language evidence while the commissioning team retains authority over protected outcomes. This study does not assume that faster handling is better. It asks whether the translated case lets another person reconstruct what was observed, what remained uncertain, which rule controlled the escalation path, and who accepted the next decision. The unit of analysis is source messages, translated records, and receiving-receiving authority outcomes. A useful result must improve the buyer's operating design without inventing company performance, universal targets, or permission that the local service catalogue does not grant.",
      "The second comparison uses a translated access request where permission and ability use the same verb. Facts are preserved events or approved records. Analysis connects those facts to a documented workflow. Inference is a plausible explanation that still needs confirmation. Unknowns remain explicit. Speaker language must not promote an inference into an outcome: “routed for equivalence check” is different from “approved,” and “an action was attempted” is different from “the requested result occurred.” This language evidence ladder makes the handoff useful across shifts and vendors because each reader can see the strongest supported claim without reconstructing a hidden conversation.",
      "The first comparison uses an idiomatic outage report that sounds less urgent in literal English. Reviewers should identify the smallest fact that changes the safe escalation path, then test a near-neighbour where that fact is absent. The exercise is not a memory quiz. It reveals whether the interface, article, or receiving authority map exposes the deciding language evidence when work occurs. A bilingual responder who follows an unusable rule should not be scored the same as one who ignores a clear boundary. Separate missing language evidence, inaccessible language evidence, ambiguous wording, tool failure, and unsupported judgement so remediation reaches the party able to change the system.",
      "The third comparison uses a speaker update whose translated tense implies completion instead of a pending equivalence check. Run it across supported channels and shifts because a control available in a portal may disappear in email, chat, or a phone note. Check what is copied when a speaker changes channel and what is merely linked at its approved source. Minimise personal or restricted data in calibration sets, exports, screenshots, and reviewer messages. Accessibility is part of the control: warnings, status labels, and error recovery must be perceivable and understandable before the risky action, with an authorized alternative that preserves the same boundary.",
      "Source interpretation is deliberately bounded. NIST material supports explicit roles, language evidence, preparation, response, and improvement; it does not prescribe this site's ticket fields or prove a local incident. CISA Secure by Design supports safe defaults and responsibility with organizations able to reduce systemic risk. ICO principles support purpose limitation, minimisation, accuracy, security, retention, and accountability where applicable. WCAG 2.2 supports accessible interactions. None of these sources supplies local volumes, service levels, authorization, jurisdictional conclusions, or measured company results. Those inputs must come from approved first-party language evidence and accountable owners.",
      "Governance test: The commissioning team must approve protected terminology, language owners, escalation triggers, and the response when no qualified reviewer is available. Version the rule, source list, receiving authority map, and effective time. Give specialists a escalation path to challenge factual errors and reviewers a way to classify a system defect without converting it into individual coaching. When an exception repeats, decide whether it represents a new supported lane, a missing protected receiving authority, or demand the service should explicitly decline. Expanding a macro is not governance. The commissioning team and provider should equivalence check systemic findings together while the commissioning team keeps decisions tied to its risk appetite, permissions, contracts, and regulated duties.",
      "Measurement should report denominators and layers rather than a single quality percentage. Count eligible source messages, translated records, and receiving-receiving authority outcomes, records with required language evidence, protected signals, correctly stopped actions, receiving authority acceptance, returned handoffs, repeat contacts, speaker checkpoints, and verified outcomes. Report time to escalation path separately from time to acceptance and time to result. A rapid transfer that nobody accepts has not created ownership. A cautious escalation later found benign may still be correct under the declared risk rule. Interpret changes with workflow, mix, coverage, and detection history rather than claiming causation from a before-and-after chart.",
      "Limitations: Dialect, code-switching, cultural context, and channel constraints resist word-for-word comparison; back-translation can miss shared assumptions. Ticket records can omit calls, private tools, or context available only to the commissioning team. Reviewer knowledge introduces hindsight, rare events may not appear, and synthetic cases cannot prove every production integration. The protocol cannot certify compliance, determine liability, establish staffing sufficiency, or promise a speaker outcome. Findings belong to the declared window, population, workflow version, channels, and authority map. Publish uncertainty and unavailable language evidence instead of converting a bounded equivalence check into a universal benchmark.",
      "Language evidence-led conclusion: translation quality should be judged by decision equivalence, preserved uncertainty, and consistent ownership—not surface fluency alone. For a buyer of outsourced tier-one support, the practical test is whether the operating lane produces a reconstructable translated case, a safe stopping point, an accepted next receiving authority, and an honest speaker checkpoint. That is narrower than transferring full operational authority, but it is valuable and measurable. Equivalence check the decision interface after material changes, keep protected language evidence at its approved source, and judge success from supported outcomes and corrected system conditions rather than activity counts alone."
    ],
    "sources": [
      {
        "name": "Web Content Accessibility Guidelines (WCAG) 2.2",
        "url": "https://www.w3.org/TR/WCAG22/",
        "note": "Checked 2026-10-02. W3C Recommendation for accessible digital content."
      },
      {
        "name": "NIST SP 800-61 Rev. 3 — Incident Response Recommendations and Considerations",
        "url": "https://csrc.nist.gov/pubs/sp/800/61/r3/final",
        "note": "Checked 2026-10-02. Primary guidance on incident-response roles, preparation, detection, response, and improvement."
      },
      {
        "name": "ICO — A guide to the data protection principles",
        "url": "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles/a-guide-to-the-data-protection-principles/",
        "note": "Checked 2026-10-02. Regulator guidance on purpose limitation, minimisation, accuracy, security, retention, and accountability."
      },
      {
        "name": "CISA Secure by Design",
        "url": "https://www.cisa.gov/securebydesign",
        "note": "Checked 2026-10-02. Authoritative principles for safe defaults and organizational responsibility."
      }
    ],
    "related": [
      "helpdesk-article-translation-risk-research",
      "helpdesk-escalation-boundaries-research"
    ]
  },
  {
    "slug": "outsourced-helpdesk-saas-offboarding-dependency-study",
    "title": "SaaS offboarding handoffs: finding access that survives a closed ticket",
    "excerpt": "A dependency study tracing accounts, sessions, integrations, ownership, and evidence after a user-leaver request.",
    "published": "2026-10-02",
    "sourceDate": "2026-10-02",
    "hero": "/research-thumbnails/helpdesk-qa-sampling-research.svg",
    "keyStats": [
      {
        "value": "5",
        "label": "coded evidence fields"
      },
      {
        "value": "3",
        "label": "paired case tests"
      }
    ],
    "body": [
      "Research question: which dependencies must be reconciled before a SaaS offboarding ticket can support a truthful completion claim? The decision matters because an outsourced help desk works from bounded dependency proof while the tenant administrator retains authority over protected outcomes. This study does not assume that faster handling is better. It asks whether the leaver case lets another person reconstruct what was observed, what remained uncertain, which rule controlled the deprovisioning path, and who accepted the next decision. The unit of analysis is offboarding requests linked to application and identity events. A useful result must improve the buyer's operating design without inventing company performance, universal targets, or permission that the local service catalogue does not grant.",
      "Methodology: create a fixed reconciliation window and declare exclusions before outcomes are inspected. Code authoritative leaver trigger, account inventory, session and token state, data or workflow ownership, and exception acceptance. Preserve the requesting manager's words separately from tool events and offboarding coordinator interpretation. Sample routine completions, clean escalations, returned handoffs, and cases discovered later through repeat contact. Leaver case the workflow version and dependency proof available at the moment of action; later knowledge must not be treated as if the frontline offboarding coordinator already possessed it. Use two reviewers for ambiguous cases, retain disagreement, and assign a source application custodian when the rule itself cannot answer the case.",
      "Operating boundary: Tier one may assemble the approved inventory, execute listed reversible steps, preserve results, and deprovisioning path exceptions to application owners. Put the stopping point beside the permitted action, not in a distant policy page. The offboarding coordinator may preserve the signal, use approved tooling, state a non-sensitive status, and obtain acceptance from the named application custodian. The offboarding coordinator should not broaden access, make legal or security determinations, promise a protected outcome, or substitute familiarity for authorization. If the primary application custodian is unavailable, a documented backup deprovisioning path and requesting manager checkpoint are required; absence does not transfer decision rights to the queue by default.",
      "The first comparison uses a primary SaaS account is disabled while an API token continues operating. Reviewers should identify the smallest fact that changes the safe deprovisioning path, then test a near-neighbour where that fact is absent. The exercise is not a memory quiz. It reveals whether the interface, article, or application custodian map exposes the deciding dependency proof when work occurs. A offboarding coordinator who follows an unusable rule should not be scored the same as one who ignores a clear boundary. Separate missing dependency proof, inaccessible dependency proof, ambiguous wording, tool failure, and unsupported judgement so remediation reaches the party able to change the system.",
      "Governance test: Identity, HR, security, application, and data owners must define authoritative triggers, transfer choices, exceptions, and closure dependency proof. Version the rule, source list, application custodian map, and effective time. Give specialists a deprovisioning path to challenge factual errors and reviewers a way to classify a system defect without converting it into individual coaching. When an exception repeats, decide whether it represents a new supported lane, a missing protected application custodian, or demand the service should explicitly decline. Expanding a macro is not governance. The tenant administrator and provider should reconciliation systemic findings together while the tenant administrator keeps decisions tied to its risk appetite, permissions, contracts, and regulated duties.",
      "The third comparison uses a contractor leaves one tenant but retains a legitimate account in another. Run it across supported channels and shifts because a control available in a portal may disappear in email, chat, or a phone note. Check what is copied when a requesting manager changes channel and what is merely linked at its approved source. Minimise personal or restricted data in calibration sets, exports, screenshots, and reviewer messages. Accessibility is part of the control: warnings, status labels, and error recovery must be perceivable and understandable before the risky action, with an authorized alternative that preserves the same boundary.",
      "Measurement should report denominators and layers rather than a single quality percentage. Count eligible offboarding requests linked to application and identity events, records with required dependency proof, protected signals, correctly stopped actions, application custodian acceptance, returned handoffs, repeat contacts, requesting manager checkpoints, and verified outcomes. Report time to deprovisioning path separately from time to acceptance and time to result. A rapid transfer that nobody accepts has not created ownership. A cautious escalation later found benign may still be correct under the declared risk rule. Interpret changes with workflow, mix, coverage, and detection history rather than claiming causation from a before-and-after chart.",
      "Limitations: Inventories are often incomplete, vendor event timing differs, and absence of observed activity does not prove access was removed. Ticket records can omit calls, private tools, or context available only to the tenant administrator. Reviewer knowledge introduces hindsight, rare events may not appear, and synthetic cases cannot prove every production integration. The protocol cannot certify compliance, determine liability, establish staffing sufficiency, or promise a requesting manager outcome. Findings belong to the declared window, population, workflow version, channels, and authority map. Publish uncertainty and unavailable dependency proof instead of converting a bounded reconciliation into a universal benchmark.",
      "Dependency proof-led conclusion: offboarding completion is a reconciled set of owned dependencies, not a closed parent ticket or one successful disable action. For a buyer of outsourced tier-one support, the practical test is whether the operating lane produces a reconstructable leaver case, a safe stopping point, an accepted next application custodian, and an honest requesting manager checkpoint. That is narrower than transferring full operational authority, but it is valuable and measurable. Reconciliation the decision interface after material changes, keep protected dependency proof at its approved source, and judge success from supported outcomes and corrected system conditions rather than activity counts alone."
    ],
    "sources": [
      {
        "name": "NIST SP 800-63-4 — Digital Identity Guidelines",
        "url": "https://csrc.nist.gov/pubs/sp/800/63/4/final",
        "note": "Checked 2026-10-02. Primary guidance on identity proofing, authentication, and authenticator management."
      },
      {
        "name": "CISA Secure by Design",
        "url": "https://www.cisa.gov/securebydesign",
        "note": "Checked 2026-10-02. Authoritative principles for safe defaults and organizational responsibility."
      },
      {
        "name": "ICO — A guide to the data protection principles",
        "url": "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles/a-guide-to-the-data-protection-principles/",
        "note": "Checked 2026-10-02. Regulator guidance on purpose limitation, minimisation, accuracy, security, retention, and accountability."
      },
      {
        "name": "NIST SP 800-61 Rev. 3 — Incident Response Recommendations and Considerations",
        "url": "https://csrc.nist.gov/pubs/sp/800/61/r3/final",
        "note": "Checked 2026-10-02. Primary guidance on incident-response roles, preparation, detection, response, and improvement."
      }
    ],
    "related": [
      "helpdesk-access-review-research",
      "helpdesk-ticket-closure-research"
    ]
  },
  {
    "slug": "outsourced-helpdesk-refund-status-ownership-study",
    "title": "Refund status support: separating recorded events from financial promises",
    "excerpt": "Research on customer-safe refund updates when commerce platforms, processors, policies, and banks expose different states.",
    "published": "2026-10-02",
    "sourceDate": "2026-10-02",
    "hero": "/research-thumbnails/helpdesk-privacy-redaction-research.svg",
    "keyStats": [
      {
        "value": "5",
        "label": "coded evidence fields"
      },
      {
        "value": "3",
        "label": "paired case tests"
      }
    ],
    "body": [
      "Research question: which refund facts can tier-one ecommerce support communicate without approving money movement or promising external settlement? The decision matters because an outsourced help desk works from bounded transaction event while the merchant retains authority over protected outcomes. This study does not assume that faster handling is better. It asks whether the order case lets another person reconstruct what was observed, what remained uncertain, which rule controlled the refund path, and who accepted the next decision. The unit of analysis is refund contacts connected to approved commerce records. A useful result must improve the buyer's operating design without inventing company performance, universal targets, or permission that the local service catalogue does not grant.",
      "The second comparison uses a partial refund request falls outside the published policy. Facts are preserved events or approved records. Analysis connects those facts to a documented workflow. Inference is a plausible explanation that still needs confirmation. Unknowns remain explicit. Buyer language must not promote an inference into an outcome: “routed for status check” is different from “approved,” and “an action was attempted” is different from “the requested result occurred.” This transaction event ladder makes the handoff useful across shifts and vendors because each reader can see the strongest supported claim without reconstructing a hidden conversation.",
      "Methodology: create a fixed status check window and declare exclusions before outcomes are inspected. Code buyer-requested outcome, order and refund reference, platform event state, decision financial decision maker, and next buyer checkpoint. Preserve the buyer's words separately from tool events and commerce responder interpretation. Sample routine completions, clean escalations, returned handoffs, and cases discovered later through repeat contact. Order case the workflow version and transaction event available at the moment of action; later knowledge must not be treated as if the frontline commerce responder already possessed it. Use two reviewers for ambiguous cases, retain disagreement, and assign a source financial decision maker when the rule itself cannot answer the case.",
      "Operating boundary: The desk may state approved non-sensitive events, collect the minimum order reference, prevent duplicate work, and refund path decisions. Put the stopping point beside the permitted action, not in a distant policy page. The commerce responder may preserve the signal, use approved tooling, state a non-sensitive status, and obtain acceptance from the named financial decision maker. The commerce responder should not broaden access, make legal or security determinations, promise a protected outcome, or substitute familiarity for authorization. If the primary financial decision maker is unavailable, a documented backup refund path and buyer checkpoint are required; absence does not transfer decision rights to the queue by default.",
      "Source interpretation is deliberately bounded. NIST material supports explicit roles, transaction event, preparation, response, and improvement; it does not prescribe this site's ticket fields or prove a local incident. CISA Secure by Design supports safe defaults and responsibility with organizations able to reduce systemic risk. ICO principles support purpose limitation, minimisation, accuracy, security, retention, and accountability where applicable. WCAG 2.2 supports accessible interactions. None of these sources supplies local volumes, service levels, authorization, jurisdictional conclusions, or measured company results. Those inputs must come from approved first-party transaction event and accountable owners.",
      "Measurement should report denominators and layers rather than a single quality percentage. Count eligible refund contacts connected to approved commerce records, records with required transaction event, protected signals, correctly stopped actions, financial decision maker acceptance, returned handoffs, repeat contacts, buyer checkpoints, and verified outcomes. Report time to refund path separately from time to acceptance and time to result. A rapid transfer that nobody accepts has not created ownership. A cautious escalation later found benign may still be correct under the declared risk rule. Interpret changes with workflow, mix, coverage, and detection history rather than claiming causation from a before-and-after chart.",
      "Governance test: The merchant retains refund approval, exception amounts, fraud determinations, processor disputes, and any claim about bank timing. Version the rule, source list, financial decision maker map, and effective time. Give specialists a refund path to challenge factual errors and reviewers a way to classify a system defect without converting it into individual coaching. When an exception repeats, decide whether it represents a new supported lane, a missing protected financial decision maker, or demand the service should explicitly decline. Expanding a macro is not governance. The merchant and provider should status check systemic findings together while the merchant keeps decisions tied to its risk appetite, permissions, contracts, and regulated duties.",
      "Limitations: Platform labels are not standardized, external settlement is not controlled by the help desk, and this method cannot determine PCI scope or financial rights. Ticket records can omit calls, private tools, or context available only to the merchant. Reviewer knowledge introduces hindsight, rare events may not appear, and synthetic cases cannot prove every production integration. The protocol cannot certify compliance, determine liability, establish staffing sufficiency, or promise a buyer outcome. Findings belong to the declared window, population, workflow version, channels, and authority map. Publish uncertainty and unavailable transaction event instead of converting a bounded status check into a universal benchmark.",
      "Transaction event-led conclusion: refund support is reliable when every buyer statement is tied to a recorded event, decision financial decision maker, and truthful checkpoint instead of a predicted financial result. For a buyer of outsourced tier-one support, the practical test is whether the operating lane produces a reconstructable order case, a safe stopping point, an accepted next financial decision maker, and an honest buyer checkpoint. That is narrower than transferring full operational authority, but it is valuable and measurable. Status check the decision interface after material changes, keep protected transaction event at its approved source, and judge success from supported outcomes and corrected system conditions rather than activity counts alone."
    ],
    "sources": [
      {
        "name": "PCI DSS v4.0.1 — Requirements and Testing Procedures",
        "url": "https://www.pcisecuritystandards.org/document_library/",
        "note": "Checked 2026-10-02. Official PCI SSC standard library; applicability requires authorized local assessment."
      },
      {
        "name": "ICO — A guide to the data protection principles",
        "url": "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles/a-guide-to-the-data-protection-principles/",
        "note": "Checked 2026-10-02. Regulator guidance on purpose limitation, minimisation, accuracy, security, retention, and accountability."
      },
      {
        "name": "CISA Secure by Design",
        "url": "https://www.cisa.gov/securebydesign",
        "note": "Checked 2026-10-02. Authoritative principles for safe defaults and organizational responsibility."
      },
      {
        "name": "Web Content Accessibility Guidelines (WCAG) 2.2",
        "url": "https://www.w3.org/TR/WCAG22/",
        "note": "Checked 2026-10-02. W3C Recommendation for accessible digital content."
      }
    ],
    "related": [
      "helpdesk-refund-escalation-research",
      "helpdesk-ecommerce-payment-data-boundary-study"
    ]
  }
];
export const oct02ResearchArticles:Post[]=oct02ResearchBase.map(article=>({...article,body:[...article.body,...oct02ResearchSupplements[article.slug]]}));
