# Rhythm Versioning v1.24Q4.45.1

```
vMAJOR.YYQ#.WEEK.STORY[-PRERELEASE][+BUILD]
```

## Components

### 01. MAJOR
- Non-negative integer with a prefix “v”.
- Changes for incompatible API modifications.
- Example: `v2` indicates a major version 2.

### 02. YYQ#
- YY: Two-digit year (23, 24, etc.).
- Q#: Quarter number (Q1-Q4).
- Provides fiscal/planning context.
- Example: 24Q2 = 2024, Quarter 2.

### 03. WEEK
- ISO week number (1-53).
- Maintains global standard.
- Continuous through year.
- Example: Week 18 (Standard ISO week).

### 04. STORY
- Non-negative integer.
- Backward compatible changes within the week.
- Incremental updates and bug fixes.
- Example: 1.

### 05. PRERELEASE (Optional)
- Optional preview releases.
- Format: `-alpha.1`, `-beta.1`, `-rc.1`.
- Example: v2.2024.43.0-beta.1.

### 06. BUILD (Optional)
- Optional build metadata.
- Format: `+build.123`.
- Example: v2.2024.43.0+build.123.