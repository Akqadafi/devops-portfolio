# Standard Operating Procedure: Quarterly Public Health Reporting

SOP PH-001 | Version 1.0 | September 14, 2026 | Local synthetic-data demonstration

## 1. Purpose and scope

1. This procedure explains how to prepare, validate, review, and archive a quarterly public-health reporting cycle. It applies to the local Reporting Portal and synthetic participant CSV files.

2. The current example is Quarterly Public Health Reporting — Q2 2026, covering April 1 through June 30, 2026. It is already archived and is available for review. Create a new cycle to practice uploads.

3. The display name describes the work. The internal identifier demo-2026-Q2 remains in its existing records and archive manifest so those records remain consistent.

## 2. Responsibilities

1. Analyst: select the correct cycle and dataset, upload a CSV, inspect validation results, correct source data, and submit a replacement version.

2. Manager: configure the reporting period and required datasets, review current outputs, approve or reject the cycle, and archive approved reports.

3. The Demo role selector simulates these permissions on this computer. It does not verify the identity of separate employees. This demonstration is not configured for real health data or public access.

## 3. Prepare the workspace

1. Open http://127.0.0.1:5173/ while the backend and frontend servers are running. If the portal is unavailable, follow the startup commands at the end of this SOP.

2. Use sample-data/valid-participants.csv and sample-data/invalid-participants.csv from the project folder. Files must be CSV and no larger than 1 MB for this demonstration.

3. Check the cycle name and reporting dates before each upload. The example datasets program_a and program_b use the same participant schema and are kept as separate reports. Reusing the sample in both is only a demonstration; do not add their totals together as a unique population.

## 4. Configure a reporting cycle — Manager

1. Select Manager under Demo role.

2. Under Configure a reporting cycle, enter a new identifier, such as public-health-2026-Q2-review. Identifiers use letters, numbers, hyphens, or underscores and must be 2–40 characters long.

3. Enter Period start 2026-04-01 and Period end 2026-06-30. Dates use YYYY-MM-DD. These dates match the supplied sample files.

4. Enter program_a, program_b in Required datasets, then select Save cycle configuration.

5. Confirm both datasets show Missing and the completeness count is 0 / 2. Reporting dates cannot be changed for an existing cycle. Required datasets cannot be changed once uploads begin.

## 5. Upload and validate — Analyst

1. Select Analyst and choose the intended cycle under View cycle.

2. Under Submit a version, choose the dataset, select the CSV file, and select Process file locally.

3. Wait for the result. Validated means the CSV passed the implemented checks and a draft aggregate was created. Needs correction means validation failed. Passing one dataset does not make the whole cycle ready.

4. In Submission history, select View validation. Read the error code, field, row, and message. For a valid file, review the draft aggregate, which excludes participant identifiers.

5. Confirm that each required dataset has a current valid version. The cycle becomes Ready for manager review only when every required dataset is valid.

## 6. Correct and resubmit — Analyst

1. Correct the source CSV using the validation details. Do not edit the generated report or infer missing participant information.

2. Select the same cycle and dataset, choose the corrected file, and process it again.

3. Confirm the version number increased. The replacement becomes Current; the earlier version stays in history as Superseded with its original validation result.

4. A failed replacement blocks approval even if an older version was valid. Check the current version, not just the total number of uploads.

## 7. Review and decide — Manager

1. Select Manager and verify the cycle dates, required datasets, and current version numbers.

2. Open View validation for each current submission and inspect its draft aggregate. Automated validation is not a substitute for reviewing whether the reported values make sense.

3. If corrections are needed, enter a specific Review note and select Reject with reason. Confirm the rejection and reason appear in Audit history. The analyst must submit a new version before another decision.

4. If the current outputs are acceptable, select Approve cycle. Approval records the exact versions and report checksums and locks the cycle against further uploads.

5. If the portal says the cycle changed, select Refresh results and review again before deciding. A new upload invalidates an earlier screen revision.

## 8. Archive and verify — Manager

1. After approval, select Archive approved reports. Approval alone does not create the final archive.

2. Confirm the status becomes Archived. Select Verify archived reports to inspect the approval identity, time, filenames, version numbers, and SHA-256 checksums.

3. The archive is stored under local-data/archive/approved/<cycle-identifier>/<approval-id>/. It contains one aggregate CSV per dataset and manifest.json.

4. Repeating Verify archived reports checks the same archive. It does not create a second archive or a duplicate audit event.

5. For corrections after approval, create a new reporting cycle and document the reason. Reopening an approved cycle is not implemented.

## 9. Exceptions and recovery

1. Missing dataset: upload the required dataset. Approval remains disabled until all current versions are valid.

2. Validation error: correct the source file and upload a new version for the same dataset.

3. Processing failed: check the source file and local storage, then submit a new version. If the server stopped during processing, a version can remain Validating; resubmit after restarting. Automatic worker recovery is not implemented.

4. Missing validation report: restore the file from your local backup or process a new version. Do not treat an unavailable report as a pass.

5. Missing or changed approved output: restore the exact approved bytes before retrying the archive. Do not edit a checksum or approval record to force verification to pass.

6. Archive storage failure: restore disk access or free space and retry. The cycle remains Approved until the archive is committed. Files on disk alone do not establish completion; check Archived status.

7. Permission error: use the role appropriate to the task. Only the Manager role can approve, reject, or archive in this portal.

## 10. Completion checklist and records

1. Every required dataset has a current valid version.

2. The manager reviewed the current validation results and aggregates.

3. The approval is recorded, the cycle is Archived, and archive verification succeeds.

4. The manifest identifies the approved versions and checksums; Audit history shows the review and archive events.

5. Keep the entire local-data directory together for local recovery, including workflow.db and its report folders. Database records refer to file paths; moving individual files can break report access. Back up with the API stopped. No retention or backup scheduler is configured here.

6. No external agency submission occurs when a cycle is archived. AWS/PostgreSQL integration, enterprise authentication, and production retention procedures remain separate work.

## Startup reference

For a fresh checkout, first run python -m venv .venv, then .\.venv\Scripts\python.exe -m pip install -e "application/backend[dev]". Run npm ci from application/frontend. Python and Node.js/npm must already be installed. Keep both servers bound to 127.0.0.1.

```powershell
# Terminal 1: from the repository root (after one-time dependency setup)
$env:APP_ENV = "local"
$env:LOCAL_DATA_ROOT = (Join-Path (Get-Location) "local-data")
.\.venv\Scripts\python.exe -m uvicorn health_reporting.api:app --host 127.0.0.1 --port 8080

# Terminal 2: from the repository root
cd application/frontend
npm run dev -- --host 127.0.0.1
```
