import React, { useState } from 'react';
import Button from '../../../components/base/Button';
import { useLanguage } from '../../../contexts/LanguageContext';

const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return false;
    if (!formData.email.trim()) return false;
    if (!formData.service) return false;
    if (!formData.message.trim()) return false;
    if (formData.message.length > 500) return false;
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Prepare form data using application/x-www-form-urlencoded encoding
      const formDataToSend = new URLSearchParams();
      formDataToSend.append('name', formData.name.trim());
      formDataToSend.append('email', formData.email.trim());
      formDataToSend.append('phone', formData.phone.trim());
      formDataToSend.append('service', formData.service);
      formDataToSend.append('message', formData.message.trim());
      formDataToSend.append('copy_to_email', 'des831store@gmail.com');

      const response = await fetch('https://readdy.ai/api/form/d48l3u4gqefflfrp9pug', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSend.toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form on success
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto px-4">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-xl p-6 sm:p-8 lg:p-10">
            <form 
              id="contact-form"
              data-readdy-form
              onSubmit={handleSubmit} 
              className="space-y-6"
            >
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <i className="ri-check-circle-line text-green-600 text-xl mr-3 flex-shrink-0"></i>
                    <p className="text-green-800 font-medium text-sm sm:text-base">
                      {t('contact.form.success')}
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <i className="ri-error-warning-line text-red-600 text-xl mr-3 flex-shrink-0"></i>
                    <p className="text-red-800 font-medium text-sm sm:text-base">
                      {t('contact.form.error')}
                    </p>
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors text-sm sm:text-base"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors text-sm sm:text-base"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                  {t('contact.form.phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors text-sm sm:text-base"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                  {t('contact.form.service')}
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors text-sm sm:text-base pr-8"
                >
                  <option value="">{t('contact.form.service')}</option>
                  <option value="graphic">{t('contact.form.service.graphic')}</option>
                  <option value="printing">{t('contact.form.service.printing')}</option>
                  <option value="gifts">{t('contact.form.service.gifts')}</option>
                  <option value="other">{t('contact.form.service.other')}</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  maxLength={500}
                  required
                  className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors text-sm sm:text-base resize-none"
                  placeholder={t('contact.form.message')}
                />
                <div className="text-right text-xs sm:text-sm text-gray-500 mt-1">
                  {formData.message.length}/500
                </div>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed text-base sm:text-lg py-4"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <i className="ri-loader-4-line animate-spin mr-2"></i>
                    {t('contact.form.sending')}
                  </div>
                ) : (
                  t('contact.form.submit')
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-map-pin-line text-xl sm:text-2xl text-orange-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-base sm:text-lg">{t('contact.info.address')}</h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Hollister, California 95023<br />
                    Estados Unidos
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-phone-line text-xl sm:text-2xl text-orange-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-base sm:text-lg">{t('contact.info.phone')}</h4>
                  <p className="text-gray-600 text-sm sm:text-base">+1 (831) 673-2181</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-mail-line text-xl sm:text-2xl text-orange-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-base sm:text-lg">{t('contact.info.email')}</h4>
                  <p className="text-gray-600 text-sm sm:text-base">des831store@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-time-line text-xl sm:text-2xl text-orange-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-base sm:text-lg">{t('contact.info.hours')}</h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Lunes - Viernes: 9:00 AM - 6:00 PM<br />
                    Sábado: 10:00 AM - 4:00 PM<br />
                    Domingo: Cerrado
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 sm:mt-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25607.28573051684!2d-121.40564425!3d36.85240415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8091e0e1d1d1d1d1%3A0x1d1d1d1d1d1d1d1d!2sHollister%2C%20CA%2095023%2C%20USA!5e0!3m2!1sen!2sus!4v1635959655654!5m2!1sen!2sus"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
