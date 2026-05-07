# Overthink Lab Shopify Theme

Custom Shopify Online Store 2.0 theme for Overthink Lab.

## Files

- `layout/theme.liquid` - global HTML shell.
- `sections/` - editable Shopify sections for the homepage, product, collection, cart, and pages.
- `templates/*.json` - Shopify templates that assemble the sections.
- `assets/theme.css` and `assets/theme.js` - visual system and small interactions.
- `assets/overthink-lab-logo.png` - bundled brand logo.

## Connect to Shopify with GitHub

1. Push this folder to a GitHub repository.
2. In Shopify admin, go to **Online Store > Themes**.
3. Choose **Add theme > Connect from GitHub**.
4. Select the repository and branch.
5. In the theme editor, set the logo in **Theme settings > Brand**.

The theme is designed so the homepage works before products are added, then automatically uses your real collections and products once they exist in Shopify.
