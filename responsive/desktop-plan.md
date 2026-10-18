# Desktop twins — the checklist

The designer, 2026-10-18: *«Пара одна телефонна сторінка — одна десктопна»*. Every phone page in `wireframes/`
gets a desktop twin of the same name in `wireframes/desktop/`, built in the look of
`responsive/_preview-desktop-ai.html` (map as the ground, the wide header, material panels, centred windows),
light and dark. The phone pages are not touched. New CSS lives in `wireframes/desktop/_desktop.css` until the
designer approves the desktop; then it moves into `design-system/`.

A row is done when the twin exists, every link on it leads to a twin, it renders in both themes, and its step
in `flows.md` is reachable from the step before it.

## 1 · Client: getting in

| Phone | Desktop | Done |
|---|---|---|
| `onboarding-client.html` | `desktop/onboarding-client.html` |  |
| `onboarding-client-empty.html` | `desktop/onboarding-client-empty.html` |  |
| `role-select.html` | `desktop/role-select.html` |  |
| `signin.html` | `desktop/signin.html` |  |
| `signin-error.html` | `desktop/signin-error.html` |  |
| `signin-loading.html` | `desktop/signin-loading.html` |  |
| `switch-role.html` | `desktop/switch-role.html` |  |
| `welcome.html` | `desktop/welcome.html` |  |
| `welcome-empty.html` | `desktop/welcome-empty.html` |  |

## 2 · Client: ordering

| Phone | Desktop | Done |
|---|---|---|
| `listings.html` | `desktop/listings.html` | yes — reference |
| `listings-error.html` | `desktop/listings-error.html` |  |
| `listings-filters.html` | `desktop/listings-filters.html` |  |
| `listings-loading.html` | `desktop/listings-loading.html` |  |
| `listings-map.html` | `desktop/listings-map.html` |  |
| `listings-map-aerial.html` | `desktop/listings-map-aerial.html` |  |
| `listings-map-inspection.html` | `desktop/listings-map-inspection.html` |  |
| `order-review.html` | `desktop/order-review.html` |  |
| `order-review-aerial.html` | `desktop/order-review-aerial.html` |  |
| `order-review-inspection.html` | `desktop/order-review-inspection.html` |  |
| `order-review-loading.html` | `desktop/order-review-loading.html` |  |
| `order-review-loading-aerial.html` | `desktop/order-review-loading-aerial.html` |  |
| `order-review-loading-inspection.html` | `desktop/order-review-loading-inspection.html` |  |
| `order-setup.html` | `desktop/order-setup.html` |  |
| `order-setup-aerial.html` | `desktop/order-setup-aerial.html` |  |
| `order-setup-empty.html` | `desktop/order-setup-empty.html` |  |
| `order-setup-error.html` | `desktop/order-setup-error.html` |  |
| `order-setup-inspection.html` | `desktop/order-setup-inspection.html` |  |
| `payment.html` | `desktop/payment.html` |  |
| `payment-aerial.html` | `desktop/payment-aerial.html` |  |
| `payment-error.html` | `desktop/payment-error.html` |  |
| `payment-inspection.html` | `desktop/payment-inspection.html` |  |
| `payment-loading.html` | `desktop/payment-loading.html` |  |
| `payment-loading-aerial.html` | `desktop/payment-loading-aerial.html` |  |
| `payment-loading-inspection.html` | `desktop/payment-loading-inspection.html` |  |
| `time-slot.html` | `desktop/time-slot.html` |  |
| `time-slot-empty.html` | `desktop/time-slot-empty.html` |  |
| `time-slot-inspection.html` | `desktop/time-slot-inspection.html` |  |
| `time-slot-inspection-empty.html` | `desktop/time-slot-inspection-empty.html` |  |

## 3 · Client: the wait

| Phone | Desktop | Done |
|---|---|---|
| `call.html` | `desktop/call.html` |  |
| `call-aerial.html` | `desktop/call-aerial.html` |  |
| `call-client.html` | `desktop/call-client.html` |  |
| `call-inspection.html` | `desktop/call-inspection.html` |  |
| `call-support.html` | `desktop/call-support.html` |  |
| `chat.html` | `desktop/chat.html` |  |
| `chat-aerial.html` | `desktop/chat-aerial.html` |  |
| `chat-client.html` | `desktop/chat-client.html` |  |
| `chat-inspection.html` | `desktop/chat-inspection.html` |  |
| `order-confirmed.html` | `desktop/order-confirmed.html` |  |
| `order-confirmed-aerial.html` | `desktop/order-confirmed-aerial.html` |  |
| `order-confirmed-empty.html` | `desktop/order-confirmed-empty.html` |  |
| `order-confirmed-error.html` | `desktop/order-confirmed-error.html` |  |
| `order-confirmed-inspection.html` | `desktop/order-confirmed-inspection.html` |  |
| `order-confirmed-loading.html` | `desktop/order-confirmed-loading.html` |  |
| `tracking.html` | `desktop/tracking.html` |  |
| `tracking-aerial.html` | `desktop/tracking-aerial.html` |  |
| `tracking-aerial-empty.html` | `desktop/tracking-aerial-empty.html` |  |
| `tracking-aerial-error.html` | `desktop/tracking-aerial-error.html` |  |
| `tracking-empty.html` | `desktop/tracking-empty.html` |  |
| `tracking-error.html` | `desktop/tracking-error.html` |  |
| `tracking-inspection.html` | `desktop/tracking-inspection.html` |  |
| `tracking-inspection-empty.html` | `desktop/tracking-inspection-empty.html` |  |
| `tracking-inspection-error.html` | `desktop/tracking-inspection-error.html` |  |
| `tracking-loading.html` | `desktop/tracking-loading.html` |  |

## 4 · Client: the outcome

| Phone | Desktop | Done |
|---|---|---|
| `delivery.html` | `desktop/delivery.html` |  |
| `delivery-aerial.html` | `desktop/delivery-aerial.html` |  |
| `delivery-error.html` | `desktop/delivery-error.html` |  |
| `delivery-loading.html` | `desktop/delivery-loading.html` |  |
| `inspection-report.html` | `desktop/inspection-report.html` |  |
| `inspection-report-error.html` | `desktop/inspection-report-error.html` |  |
| `inspection-report-loading.html` | `desktop/inspection-report-loading.html` |  |
| `notifications.html` | `desktop/notifications.html` |  |
| `notifications-empty.html` | `desktop/notifications-empty.html` |  |
| `notifications-loading.html` | `desktop/notifications-loading.html` |  |
| `order-details.html` | `desktop/order-details.html` |  |
| `order-details-aerial.html` | `desktop/order-details-aerial.html` |  |
| `order-details-inspection.html` | `desktop/order-details-inspection.html` |  |
| `order-history.html` | `desktop/order-history.html` |  |
| `order-history-empty.html` | `desktop/order-history-empty.html` |  |
| `order-history-loading.html` | `desktop/order-history-loading.html` |  |
| `rate.html` | `desktop/rate.html` |  |
| `rate-aerial.html` | `desktop/rate-aerial.html` |  |
| `rate-inspection.html` | `desktop/rate-inspection.html` |  |
| `share.html` | `desktop/share.html` |  |
| `share-empty.html` | `desktop/share-empty.html` |  |

## 5 · Client: help and account

| Phone | Desktop | Done |
|---|---|---|
| `account.html` | `desktop/account.html` |  |
| `account-edit.html` | `desktop/account-edit.html` |  |
| `account-photo.html` | `desktop/account-photo.html` |  |
| `contact-support.html` | `desktop/contact-support.html` |  |
| `contact-support-error.html` | `desktop/contact-support-error.html` |  |
| `report-issue.html` | `desktop/report-issue.html` |  |
| `report-issue-empty.html` | `desktop/report-issue-empty.html` |  |
| `report-issue-loading.html` | `desktop/report-issue-loading.html` |  |
| `resolution.html` | `desktop/resolution.html` |  |
| `support.html` | `desktop/support.html` |  |

## 6 · Operator: getting in and jobs

| Phone | Desktop | Done |
|---|---|---|
| `job-offer.html` | `desktop/job-offer.html` |  |
| `job-offer-empty.html` | `desktop/job-offer-empty.html` |  |
| `job-offer-inspection.html` | `desktop/job-offer-inspection.html` |  |
| `onboarding-operator.html` | `desktop/onboarding-operator.html` |  |
| `operator-fee-terms.html` | `desktop/operator-fee-terms.html` |  |
| `operator-listings.html` | `desktop/operator-listings.html` |  |
| `operator-listings-empty.html` | `desktop/operator-listings-empty.html` |  |
| `operator-notifications.html` | `desktop/operator-notifications.html` |  |
| `operator-notifications-empty.html` | `desktop/operator-notifications-empty.html` |  |
| `operator-profile-setup.html` | `desktop/operator-profile-setup.html` |  |
| `operator-signup.html` | `desktop/operator-signup.html` |  |
| `operator-signup-error.html` | `desktop/operator-signup-error.html` |  |
| `operator-signup-loading.html` | `desktop/operator-signup-loading.html` |  |
| `operator-verification.html` | `desktop/operator-verification.html` |  |
| `operator-verification-error.html` | `desktop/operator-verification-error.html` |  |
| `operator-verification-loading.html` | `desktop/operator-verification-loading.html` |  |

## 7 · Operator: the job and the money

| Phone | Desktop | Done |
|---|---|---|
| `earning-details.html` | `desktop/earning-details.html` |  |
| `earning-details-aerial.html` | `desktop/earning-details-aerial.html` |  |
| `earning-details-inspection.html` | `desktop/earning-details-inspection.html` |  |
| `job-brief.html` | `desktop/job-brief.html` |  |
| `job-brief-aerial.html` | `desktop/job-brief-aerial.html` |  |
| `job-brief-error.html` | `desktop/job-brief-error.html` |  |
| `job-brief-inspection.html` | `desktop/job-brief-inspection.html` |  |
| `job-checklist.html` | `desktop/job-checklist.html` |  |
| `job-checklist-error.html` | `desktop/job-checklist-error.html` |  |
| `operator-account.html` | `desktop/operator-account.html` |  |
| `operator-account-photo.html` | `desktop/operator-account-photo.html` |  |
| `operator-dispute.html` | `desktop/operator-dispute.html` |  |
| `operator-dispute-error.html` | `desktop/operator-dispute-error.html` |  |
| `ratings.html` | `desktop/ratings.html` |  |
| `ratings-empty.html` | `desktop/ratings-empty.html` |  |
| `result-upload.html` | `desktop/result-upload.html` |  |
| `result-upload-error.html` | `desktop/result-upload-error.html` |  |
| `result-upload-loading.html` | `desktop/result-upload-loading.html` |  |
| `wallet.html` | `desktop/wallet.html` |  |
| `wallet-empty.html` | `desktop/wallet-empty.html` |  |
| `withdraw.html` | `desktop/withdraw.html` |  |
| `withdraw-error.html` | `desktop/withdraw-error.html` |  |
| `withdraw-loading.html` | `desktop/withdraw-loading.html` |  |

