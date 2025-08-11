import React from "react";

const FooterDetails = () => {
  return (
    <footer className="bg-base-300 text-base-content py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2  gap-8">
        {/* About Us */}
        <div className="space-y-4">
          <p className="text-xl font-semibold">About Us</p>
          <p className="text-sm text-base-content">
            Welcome to our App Store platform—your trusted destination for
            discovering, downloading, and managing the best digital applications
            for your needs. Whether you're looking for productivity tools,
            entertainment, education, or lifestyle apps, we offer a carefully
            curated collection to help users explore high-quality, secure, and
            reliable software.
            <br />
            <br />
            Our journey began with a simple mission: to create a user-first
            platform that bridges developers and end users through a seamless
            app discovery experience. With the rise of mobile and web-based
            applications, we saw the need for a smarter, more organized app
            marketplace that promotes both established developers and innovative
            newcomers. Our platform continues to grow with a vast selection of
            apps, giving our users the tools they need to improve their digital
            lives.
          </p>
        </div>

        {/* Help */}
        <div className="space-y-4">
          <p className="text-xl font-semibold">Help</p>
          <p className="text-sm text-base-content">
            Need assistance with using our App Store? You're in the right place.
            Our Help section is dedicated to providing comprehensive support for
            all users—whether you're a first-time visitor, a long-time customer,
            or a developer looking to publish your app. We are committed to
            providing clear and accessible resources to ensure your experience
            is smooth.
            <br />
            <br />
            You can find troubleshooting guides, FAQs, and step-by-step
            instructions for common issues related to downloading apps, payment
            inquiries, and more. If you still need help, feel free to contact
            us. You can email us directly at{" "}
            <a href="mailto:zubaedhasan46@gmail.com" className="text-primary">
              zubaedhasan46@gmail.com
            </a>{" "}
            and our support team will assist you.
          </p>
        </div>

        {/* Terms of Service */}
        <div className="space-y-4">
          <p className="text-xl font-semibold">Terms of Service</p>
          <p className="text-sm text-base-content">
            These Terms of Service ("Terms") govern your use of our App Store
            platform, including access to digital products, services, and any
            associated content. By using our site or downloading any
            application, you agree to be bound by these Terms.
            <br />
            <br />
            <strong>User Responsibilities:</strong> You must be at least 13
            years old to use our platform. You are responsible for maintaining
            the confidentiality of your login credentials and for all activities
            that occur under your account. You agree not to use the platform for
            any illegal activities, including the distribution of malware or
            unauthorized content.
            <br />
            <br />
            <strong>Content Usage:</strong> All content on the platform,
            including apps, graphics, text, and branding, is protected by
            intellectual property rights. Unauthorized use, copying, or
            modification of content without permission is strictly prohibited.
          </p>
        </div>

        {/* Privacy Policy */}
        <div className="space-y-4">
          <p className="text-xl font-semibold">Privacy Policy</p>
          <p className="text-sm text-base-content">
            We are committed to protecting your privacy. This Privacy Policy
            explains how we collect, use, and safeguard your personal
            information when you use our App Store platform. Your privacy and
            the security of your data are of utmost importance to us.
            <br />
            <br />
            <strong>Information We Collect:</strong> When you create an account,
            download apps, or interact with our services, we may collect
            personal details such as your name, email address, payment
            information, device ID, and usage behavior. We also collect
            technical data through cookies and analytics tools to improve
            platform performance.
            <br />
            <br />
            <strong>How We Use Your Data:</strong> Your data is used to provide
            personalized services, process transactions, deliver support, and
            improve your overall experience on the platform. We may also use
            aggregated data to enhance system functionality and analyze trends.
            <br />
            <br />
            <strong>Third-Party Sharing:</strong> We do not sell your personal
            information to third parties. However, some apps you download may
            have their own privacy policies, and we encourage you to review them
            before installation.
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
    </footer>
  );
};

export default FooterDetails;
