# 📧 EmailJS Setup Guide for Hiland Tech Contact Form

## 🚀 **What is EmailJS?**

EmailJS allows you to send emails directly from your React frontend without needing a backend server. It's perfect for contact forms and integrates seamlessly with your existing website.

## 📋 **Step-by-Step Setup**

### **1. Create EmailJS Account**
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### **2. Set Up Email Service**
1. **Add Email Service:**
   - Go to "Email Services" in your dashboard
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the authentication steps
   - **Save your Service ID** (you'll need this later)

2. **Recommended Services:**
   - **Gmail**: Use your Gmail account
   - **Outlook**: Use your Outlook/Hotmail account
   - **Custom SMTP**: For business emails

### **3. Create Email Template**
1. **Go to "Email Templates":**
   - Click "Create New Template"
   - Choose "Blank Template"

2. **Template Content:**
   ```html
   <h2>New Contact Form Submission</h2>
   
   <p><strong>Name:</strong> {{from_name}}</p>
   <p><strong>Email:</strong> {{from_email}}</p>
   <p><strong>Phone:</strong> {{from_phone}}</p>
   <p><strong>Company:</strong> {{company}}</p>
   <p><strong>Project Type:</strong> {{project_type}}</p>
   <p><strong>Budget:</strong> {{budget}}</p>
   
   <h3>Message:</h3>
   <p>{{message}}</p>
   
   <hr>
   <p><em>This message was sent from your Hiland Tech website contact form.</em></p>
   ```

3. **Save Template:**
   - Give it a name like "Hiland Tech Contact Form"
   - **Save your Template ID** (you'll need this later)

### **4. Get Your Public Key**
1. Go to "Account" → "API Keys"
2. **Copy your Public Key** (you'll need this later)

### **5. Update Your Contact Form**
Replace the placeholder values in `src/pages/Contact.jsx`:

```javascript
// Replace these values with your actual EmailJS credentials
emailjs.init("YOUR_PUBLIC_KEY") // Your EmailJS Public Key

const result = await emailjs.send(
  'YOUR_SERVICE_ID',     // Your EmailJS Service ID
  'YOUR_TEMPLATE_ID',    // Your EmailJS Template ID
  templateParams,
  'YOUR_PUBLIC_KEY'      // Your EmailJS Public Key
)
```

### **6. Test Your Form**
1. Start your development server: `npm run dev`
2. Go to http://localhost:3000/contact
3. Fill out and submit the form
4. Check your email for the submission

## 🔧 **Configuration Options**

### **Email Settings**
- **Reply-To**: Set to `{{from_email}}` so you can reply directly to the sender
- **Subject**: Customize the email subject line
- **From Name**: Set to "Hiland Tech Website" or your preferred name

### **Template Variables**
The form automatically sends these variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{from_phone}}` - Sender's phone
- `{{company}}` - Company name
- `{{project_type}}` - Type of project
- `{{budget}}` - Budget range
- `{{message}}` - Project details

## 📱 **Mobile Optimization**
Your contact form is already fully responsive and includes:
- Loading states with spinner
- Success/error messages
- Form validation
- Mobile-friendly layout

## 🚨 **Important Notes**

### **Free Plan Limits**
- **EmailJS Free Plan**: 200 emails/month
- **Upgrade Options**: Available for higher volumes
- **Business Plans**: Start at $15/month for 1,000 emails

### **Security**
- Public keys are safe to expose in frontend code
- Service IDs and template IDs are also public
- Only your email service credentials are private

### **Spam Protection**
- EmailJS includes basic spam filtering
- Consider adding CAPTCHA for additional protection
- Monitor your email for suspicious submissions

## 🎯 **Alternative Solutions**

### **Option 2: Netlify Forms (Free)**
If you deploy to Netlify, you can use their built-in form handling:
```html
<form name="contact" netlify>
  <!-- Your form fields -->
</form>
```

### **Option 3: Formspree (Free)**
Another popular form service:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <!-- Your form fields -->
</form>
```

### **Option 4: Backend API**
For full control, create a backend API:
- Node.js + Express
- Python + Flask/Django
- PHP + Laravel
- Ruby on Rails

## 🚀 **Deployment**

### **Local Development**
- Works immediately after setup
- Test thoroughly before deploying

### **Production Deployment**
- Same configuration works in production
- No additional setup required
- Monitor email delivery rates

## 📞 **Support**

### **EmailJS Support**
- [Documentation](https://www.emailjs.com/docs/)
- [Community Forum](https://community.emailjs.com/)
- [Email Support](mailto:support@emailjs.com)

### **Hiland Tech Support**
- Email: info@hiland.tech
- Phone: Minnesota: 952-245-9629, California: 714-912-3163

## ✅ **Checklist**

- [ ] Created EmailJS account
- [ ] Set up email service
- [ ] Created email template
- [ ] Got public key, service ID, and template ID
- [ ] Updated Contact.jsx with real credentials
- [ ] Tested form submission
- [ ] Received test email
- [ ] Deployed to production

---

**🎉 Congratulations! Your contact form is now fully functional and will send real emails to your inbox!**
