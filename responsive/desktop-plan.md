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
| `onboarding-client.html` | `desktop/onboarding-client.html` | yes |
| `onboarding-client-empty.html` | `desktop/onboarding-client-empty.html` | yes |
| `role-select.html` | `desktop/role-select.html` | yes |
| `signin.html` | `desktop/signin.html` | yes |
| `signin-error.html` | `desktop/signin-error.html` | yes |
| `signin-loading.html` | `desktop/signin-loading.html` | yes |
| `switch-role.html` | `desktop/switch-role.html` | yes |
| `welcome.html` | `desktop/welcome.html` | yes |
| `welcome-empty.html` | `desktop/welcome-empty.html` | yes |

## 2 · Client: ordering

| Phone | Desktop | Done |
|---|---|---|
| `listings.html` | `desktop/listings.html` | yes — reference |
| `listings-error.html` | `desktop/listings-error.html` | yes |
| `listings-filters.html` | `desktop/listings-filters.html` | yes |
| `listings-loading.html` | `desktop/listings-loading.html` | yes |
| `listings-map.html` | `desktop/listings-map.html` | yes |
| `listings-map-aerial.html` | `desktop/listings-map-aerial.html` | yes |
| `listings-map-inspection.html` | `desktop/listings-map-inspection.html` | yes |
| `order-review.html` | `desktop/order-review.html` | yes |
| `order-review-aerial.html` | `desktop/order-review-aerial.html` | yes |
| `order-review-inspection.html` | `desktop/order-review-inspection.html` | yes |
| `order-review-loading.html` | `desktop/order-review-loading.html` | yes |
| `order-review-loading-aerial.html` | `desktop/order-review-loading-aerial.html` | yes |
| `order-review-loading-inspection.html` | `desktop/order-review-loading-inspection.html` | yes |
| `order-setup.html` | `desktop/order-setup.html` | yes |
| `order-setup-aerial.html` | `desktop/order-setup-aerial.html` | yes |
| `order-setup-empty.html` | `desktop/order-setup-empty.html` | yes |
| `order-setup-error.html` | `desktop/order-setup-error.html` | yes |
| `order-setup-inspection.html` | `desktop/order-setup-inspection.html` | yes |
| `payment.html` | `desktop/payment.html` | yes |
| `payment-aerial.html` | `desktop/payment-aerial.html` | yes |
| `payment-error.html` | `desktop/payment-error.html` | yes |
| `payment-inspection.html` | `desktop/payment-inspection.html` | yes |
| `payment-loading.html` | `desktop/payment-loading.html` | yes |
| `payment-loading-aerial.html` | `desktop/payment-loading-aerial.html` | yes |
| `payment-loading-inspection.html` | `desktop/payment-loading-inspection.html` | yes |
| `time-slot.html` | `desktop/time-slot.html` | yes |
| `time-slot-empty.html` | `desktop/time-slot-empty.html` | yes |
| `time-slot-inspection.html` | `desktop/time-slot-inspection.html` | yes |
| `time-slot-inspection-empty.html` | `desktop/time-slot-inspection-empty.html` | yes |

## 3 · Client: the wait

| Phone | Desktop | Done |
|---|---|---|
| `call.html` | `desktop/call.html` | yes |
| `call-aerial.html` | `desktop/call-aerial.html` | yes |
| `call-client.html` | `desktop/call-client.html` | yes |
| `call-inspection.html` | `desktop/call-inspection.html` | yes |
| `call-support.html` | `desktop/call-support.html` | yes |
| `chat.html` | `desktop/chat.html` | yes |
| `chat-aerial.html` | `desktop/chat-aerial.html` | yes |
| `chat-client.html` | `desktop/chat-client.html` | yes |
| `chat-inspection.html` | `desktop/chat-inspection.html` | yes |
| `order-confirmed.html` | `desktop/order-confirmed.html` | yes |
| `order-confirmed-aerial.html` | `desktop/order-confirmed-aerial.html` | yes |
| `order-confirmed-empty.html` | `desktop/order-confirmed-empty.html` | yes |
| `order-confirmed-error.html` | `desktop/order-confirmed-error.html` | yes |
| `order-confirmed-inspection.html` | `desktop/order-confirmed-inspection.html` | yes |
| `order-confirmed-loading.html` | `desktop/order-confirmed-loading.html` | yes |
| `tracking.html` | `desktop/tracking.html` | yes |
| `tracking-aerial.html` | `desktop/tracking-aerial.html` | yes |
| `tracking-aerial-empty.html` | `desktop/tracking-aerial-empty.html` | yes |
| `tracking-aerial-error.html` | `desktop/tracking-aerial-error.html` | yes |
| `tracking-empty.html` | `desktop/tracking-empty.html` | yes |
| `tracking-error.html` | `desktop/tracking-error.html` | yes |
| `tracking-inspection.html` | `desktop/tracking-inspection.html` | yes |
| `tracking-inspection-empty.html` | `desktop/tracking-inspection-empty.html` | yes |
| `tracking-inspection-error.html` | `desktop/tracking-inspection-error.html` | yes |
| `tracking-loading.html` | `desktop/tracking-loading.html` | yes |

## 4 · Client: the outcome

| Phone | Desktop | Done |
|---|---|---|
| `delivery.html` | `desktop/delivery.html` | yes |
| `delivery-aerial.html` | `desktop/delivery-aerial.html` | yes |
| `delivery-error.html` | `desktop/delivery-error.html` | yes |
| `delivery-loading.html` | `desktop/delivery-loading.html` | yes |
| `inspection-report.html` | `desktop/inspection-report.html` | yes |
| `inspection-report-error.html` | `desktop/inspection-report-error.html` | yes |
| `inspection-report-loading.html` | `desktop/inspection-report-loading.html` | yes |
| `notifications.html` | `desktop/notifications.html` | yes |
| `notifications-empty.html` | `desktop/notifications-empty.html` | yes |
| `notifications-loading.html` | `desktop/notifications-loading.html` | yes |
| `order-details.html` | `desktop/order-details.html` | yes |
| `order-details-aerial.html` | `desktop/order-details-aerial.html` | yes |
| `order-details-inspection.html` | `desktop/order-details-inspection.html` | yes |
| `order-history.html` | `desktop/order-history.html` | yes |
| `order-history-empty.html` | `desktop/order-history-empty.html` | yes |
| `order-history-loading.html` | `desktop/order-history-loading.html` | yes |
| `rate.html` | `desktop/rate.html` | yes |
| `rate-aerial.html` | `desktop/rate-aerial.html` | yes |
| `rate-inspection.html` | `desktop/rate-inspection.html` | yes |
| `share.html` | `desktop/share.html` | yes |
| `share-empty.html` | `desktop/share-empty.html` | yes |

## 5 · Client: help and account

| Phone | Desktop | Done |
|---|---|---|
| `account.html` | `desktop/account.html` | yes |
| `account-edit.html` | `desktop/account-edit.html` | yes |
| `account-photo.html` | `desktop/account-photo.html` | yes |
| `contact-support.html` | `desktop/contact-support.html` | yes |
| `contact-support-error.html` | `desktop/contact-support-error.html` | yes |
| `report-issue.html` | `desktop/report-issue.html` | yes |
| `report-issue-empty.html` | `desktop/report-issue-empty.html` | yes |
| `report-issue-loading.html` | `desktop/report-issue-loading.html` | yes |
| `resolution.html` | `desktop/resolution.html` | yes |
| `support.html` | `desktop/support.html` | yes |

## 6 · Operator: getting in and jobs

| Phone | Desktop | Done |
|---|---|---|
| `job-offer.html` | `desktop/job-offer.html` | yes |
| `job-offer-empty.html` | `desktop/job-offer-empty.html` | yes |
| `job-offer-inspection.html` | `desktop/job-offer-inspection.html` | yes |
| `onboarding-operator.html` | `desktop/onboarding-operator.html` | yes |
| `operator-fee-terms.html` | `desktop/operator-fee-terms.html` | yes |
| `operator-listings.html` | `desktop/operator-listings.html` | yes |
| `operator-listings-empty.html` | `desktop/operator-listings-empty.html` | yes |
| `operator-notifications.html` | `desktop/operator-notifications.html` | yes |
| `operator-notifications-empty.html` | `desktop/operator-notifications-empty.html` | yes |
| `operator-profile-setup.html` | `desktop/operator-profile-setup.html` | yes |
| `operator-signup.html` | `desktop/operator-signup.html` | yes |
| `operator-signup-error.html` | `desktop/operator-signup-error.html` | yes |
| `operator-signup-loading.html` | `desktop/operator-signup-loading.html` | yes |
| `operator-verification.html` | `desktop/operator-verification.html` | yes |
| `operator-verification-error.html` | `desktop/operator-verification-error.html` | yes |
| `operator-verification-loading.html` | `desktop/operator-verification-loading.html` | yes |

## 7 · Operator: the job and the money

| Phone | Desktop | Done |
|---|---|---|
| `earning-details.html` | `desktop/earning-details.html` | yes |
| `earning-details-aerial.html` | `desktop/earning-details-aerial.html` | yes |
| `earning-details-inspection.html` | `desktop/earning-details-inspection.html` | yes |
| `job-brief.html` | `desktop/job-brief.html` | yes |
| `job-brief-aerial.html` | `desktop/job-brief-aerial.html` | yes |
| `job-brief-error.html` | `desktop/job-brief-error.html` | yes |
| `job-brief-inspection.html` | `desktop/job-brief-inspection.html` | yes |
| `job-checklist.html` | `desktop/job-checklist.html` | yes |
| `job-checklist-error.html` | `desktop/job-checklist-error.html` | yes |
| `operator-account.html` | `desktop/operator-account.html` | yes |
| `operator-account-photo.html` | `desktop/operator-account-photo.html` | yes |
| `operator-dispute.html` | `desktop/operator-dispute.html` | yes |
| `operator-dispute-error.html` | `desktop/operator-dispute-error.html` | yes |
| `ratings.html` | `desktop/ratings.html` | yes |
| `ratings-empty.html` | `desktop/ratings-empty.html` | yes |
| `result-upload.html` | `desktop/result-upload.html` | yes |
| `result-upload-error.html` | `desktop/result-upload-error.html` | yes |
| `result-upload-loading.html` | `desktop/result-upload-loading.html` | yes |
| `wallet.html` | `desktop/wallet.html` | yes |
| `wallet-empty.html` | `desktop/wallet-empty.html` | yes |
| `withdraw.html` | `desktop/withdraw.html` | yes |
| `withdraw-error.html` | `desktop/withdraw-error.html` | yes |
| `withdraw-loading.html` | `desktop/withdraw-loading.html` | yes |

