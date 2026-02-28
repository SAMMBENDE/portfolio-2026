# 📧 Contact Form Setup Instructions

Your portfolio now has a **fully functional contact form** that sends emails directly to your inbox!

## Quick Setup (2 minutes)

### Step 1: Get Your Free Access Key

1. Go to [https://web3forms.com/](https://web3forms.com/)
2. Enter your email address in the form
3. Click "Get Access Key"
4. Check your email for the confirmation with your Access Key

### Step 2: Add the Access Key

1. Open the `.env.local` file in your project root
2. Replace `YOUR_ACCESS_KEY_HERE` with your actual access key:

```bash
NEXT_PUBLIC_WEB3FORMS_KEY=abc123-your-actual-key-xyz789
```

3. Save the file

### Step 3: Restart Your Dev Server

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

### Step 4: Test It!

1. Go to your website: http://localhost:3000
2. Scroll to the Contact section
3. Fill out the form with test data
4. Click "Send Message"
5. Check your email inbox - you should receive the message!

## Features

✅ **Instant email delivery** - Messages arrive in seconds  
✅ **No backend needed** - Works entirely on the frontend  
✅ **Free forever** - Up to 250 submissions/month  
✅ **Spam protection** - Built-in spam filtering  
✅ **Loading states** - Shows spinner while sending  
✅ **Success/Error messages** - User-friendly feedback  
✅ **Form validation** - Required fields enforced  

## Production Deployment

When deploying to Vercel/Netlify:

1. Add the environment variable in your hosting dashboard:
   - **Variable Name:** `NEXT_PUBLIC_WEB3FORMS_KEY`
   - **Value:** Your access key

2. Redeploy your site

That's it! Your contact form is now live and working.

## Troubleshooting

**Not receiving emails?**
- Double-check your access key in `.env.local`
- Make sure you restarted the dev server
- Check your spam folder
- Verify the email address you registered with Web3Forms

**Form not submitting?**
- Check browser console for errors
- Ensure `.env.local` file exists in project root
- Make sure the access key doesn't have quotes around it

## Need Help?

- Web3Forms Docs: https://docs.web3forms.com/
- Web3Forms Support: support@web3forms.com
