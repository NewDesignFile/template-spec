# Rhythm Versioning System (RhyVer)

Rhythm versioning (RhyVer) helps teams maintain momentum and follow a release cadence. Using the format `vMAJOR.YYQ#.WEEK.STORY`, it combines semantic versioning principles with granular temporal context, creating a natural rhythm for software releases. 

For example, `v2.24Q4.45.32` indicates a major version 2 release from the year 2024, Q4, ISO week 45, with 32 backward compatible changes, enabling predictable release cycles and better alignment with business goals.


### Specification
```bash
vMAJOR.YYQ#.WEEK.STORY[-PRERELEASE][+BUILD]

Example:   v2.24Q4.45.32-rc.2
            │ │    │  └─────  Stories
            │ │    └────────  ISO week
            │ └─────────────  Year & quarter
            └───────────────  Major version
```

### Using with npm
```json
{
  "name": "package-name",
  "rhyver": "v2.24Q4.45.32",
  "version": "2.45.32",
}
```

[Read the Full Documentation](https://rhyver.com/) (๑•̀ㅂ•́)و✧
