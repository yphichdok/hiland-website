# EmailJS Configuration Template

## 🔑 **Your EmailJS Credentials (Fill These In)**

```
Service ID:    service_________________
Template ID:   template________________
Public Key:    user___________________
```

## 📝 **How to Get These Values:**

### **1. Service ID:**
- Go to EmailJS Dashboard → "Email Services"
- Copy the ID (starts with "service_")

### **2. Template ID:**
- Go to EmailJS Dashboard → "Email Templates"  
- Copy the ID (starts with "template_")

### **3. Public Key:**
- Go to EmailJS Dashboard → "Account" → "API Keys"
- Copy the Public Key (starts with "user_")

## 🔧 **Code Updates Needed:**

### **File: `src/pages/Contact.jsx`**

**Line 25:** Replace `YOUR_PUBLIC_KEY`
```jsx
emailjs.init("user_________________") // Your actual public key
```

**Line 58:** Replace `YOUR_SERVICE_ID`
```jsx
'YOUR_SERVICE_ID' → 'service_________________'
```

**Line 59:** Replace `YOUR_TEMPLATE_ID`
```jsx
'YOUR_TEMPLATE_ID' → 'template________________'
```

**Line 60:** Replace `YOUR_PUBLIC_KEY`
```jsx
'YOUR_PUBLIC_KEY' → 'user___________________'
```

## ✅ **Quick Test:**

1. Fill out the form above
2. Update your code with the real values
3. Test the contact form
4. Check your email for the submission

## 🚨 **Important Notes:**

- **Keep your credentials secure** - don't share them publicly
- **Test thoroughly** before going live
- **Monitor your EmailJS dashboard** for delivery status
- **Free plan includes 200 emails/month**

## 📞 **Need Help?**

- **EmailJS Support**: Available in dashboard
- **Documentation**: [docs.emailjs.com](https://docs.emailjs.com/)
- **Community**: [EmailJS Community](https://community.emailjs.com/)
