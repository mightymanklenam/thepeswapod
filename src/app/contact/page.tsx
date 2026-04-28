"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Instagram, TwitterIcon as Twitter, Linkedin } from "lucide-react";
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  company: Yup.string().optional(),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Phone must contain digits only")
    .min(10, "Phone must be at least 10 digits")
    .required("Phone is required"),
  message: Yup.string().required("Message is required"),
  service: Yup.string().required("Please select a service"),
});

export default function Contact() {
  const router = useRouter();

  interface FormValues {
    name: string;
    email: string;
    phone: string;
    company?: string;
    message: string;
    service: string;
  }

const handleSubmit = async (
    formData: FormValues,
    { setSubmitting, resetForm }: FormikHelpers<FormValues>
  ) => {
    try {
      await emailjs.send(
        process.env.EMAILJS_SERVICE_ID!,
        process.env.EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company || "N/A",
          message: formData.message,
          service: formData.service,
        },
        process.env.EMAILJS_PUBLIC_KEY!
      );

      resetForm();
      setTimeout(() => router.push("/contact/success"), 1200);
    } catch (error) {
      alert("Failed to send message. Please try again.");
      console.error("Error submitting contact form:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="pt-32">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Let&apos;s work together
            </h1>
            <p className="text-muted-foreground text-lg">
              Ready to share your story or collaborate with Africa&apos;s
              leading business podcast?
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* LEFT SIDE (unchanged) */}
            <div className="space-y-12">
              <div>
                <h2 className="text-xl font-semibold mb-8">Our studio</h2>
                <p className="text-muted-foreground mb-8">
                  Where the magic happens. Our recording studios are where
                  entrepreneurs share their most inspiring stories.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-2">Accra</h3>
                    <p className="text-sm text-muted-foreground">
                      210A Tulip Road
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Community 1, Lakeside Estates
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-8">Get in touch</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-2">Be a Guest</h3>
                    <p className="text-sm text-muted-foreground">
                      guests@peswa.com
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Partnerships</h3>
                    <p className="text-sm text-muted-foreground">
                      partners@peswa.com
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-8">Follow us</h2>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/thepeswa"
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://twitter.com/thepeswa"
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href="https://linkedin.com/company/thepeswa"
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE (FORMIK + YUP) */}
            <div>
              <h2 className="text-xl font-semibold mb-8">Share your story</h2>

              <Formik<FormValues>
                initialValues={{
                  name: "",
                  email: "",
                  company: "",
                  phone: "",
                  message: "",
                  service: "",
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleSubmit,
                  setFieldValue,
                  isSubmitting,
                }) => (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                        name="name"
                        placeholder="Name"
                        value={values.name}
                        onChange={handleChange}
                        className={`h-12 ${
                          errors.name && touched.name ? "border-red-500" : ""
                        }`}
                      />
                      {errors.name && touched.name && (
                        <p className="text-red-500 text-sm">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <Input
                        name="email"
                        placeholder="Email"
                        value={values.email}
                        onChange={handleChange}
                        className={`h-12 ${
                          errors.email && touched.email ? "border-red-500" : ""
                        }`}
                      />
                      {errors.email && touched.email && (
                        <p className="text-red-500 text-sm">{errors.email}</p>
                      )}
                    </div>

                    <Input
                      name="company"
                      placeholder="Company"
                      value={values.company}
                      onChange={handleChange}
                      className="h-12"
                    />

                    <div>
                      <Input
                        name="phone"
                        placeholder="Phone"
                        value={values.phone}
                        onChange={handleChange}
                        className={`h-12 ${
                          errors.phone && touched.phone ? "border-red-500" : ""
                        }`}
                      />
                      {errors.phone && touched.phone && (
                        <p className="text-red-500 text-sm">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <Textarea
                        name="message"
                        placeholder="Message"
                        value={values.message}
                        onChange={handleChange}
                        className={`min-h-[120px] resize-none ${
                          errors.message && touched.message
                            ? "border-red-500"
                            : ""
                        }`}
                      />
                      {errors.message && touched.message && (
                        <p className="text-red-500 text-sm">{errors.message}</p>
                      )}
                    </div>

                    <div>
                      <Select
                        onValueChange={(value) =>
                          setFieldValue("service", value)
                        }
                      >
                        <SelectTrigger
                          className={`h-12 w-full ${
                            errors.service && touched.service
                              ? "border-red-500"
                              : ""
                          }`}
                        >
                          <SelectValue placeholder="What can we help you with?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="guest-appearance">
                            I want to be a guest
                          </SelectItem>
                          <SelectItem value="partnership">
                            Partnership opportunity
                          </SelectItem>
                          <SelectItem value="sponsorship">
                            Sponsorship inquiry
                          </SelectItem>
                          <SelectItem value="media-inquiry">
                            Media & press
                          </SelectItem>
                          <SelectItem value="general">
                            General question
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.service && touched.service && (
                        <p className="text-red-500 text-sm">{errors.service}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-3">
                          <svg
                            className="animate-spin h-5 w-5 text-white"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            />
                            <circle
                              className="opacity-75"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              strokeDasharray="80"
                              strokeDashoffset="60"
                              strokeLinecap="round"
                              fill="none"
                            />
                          </svg>
                          <span>Sending...</span>
                        </div>
                      ) : (
                        "Let's work together"
                      )}
                    </Button>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
