# Figma Tokens to Tailwind CSS Converter

This plugin converts map tokens to Tailwind CSS.

## Requirements

- Seed Token JSON File
- Map Token JSON File

## Flow & Guide

When handling cases where the map token JSON includes references to values from the seed token JSON, the plugin recursively traverses the map token JSON and replaces these references with their corresponding values from the seed token JSON. To achieve this, run:

```bash
npm run format
```

After running the `format` command, the references will be resolved. Check the `resolved_map.json` for the result in output folder.

To convert to **Tailwind CSS**, run:

```bash
npm run build
```
After running the `build` command, check the tailwind.css file for the result.

### After that If u want to check the demo
pls open
```index.html```
