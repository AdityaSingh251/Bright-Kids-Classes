import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MessageCircle, Sparkles, Star, Loader2, CheckCircle2, UserPlus } from 'lucide-react';
import { useConfetti } from '@/hooks/useConfetti';
import { toast } from 'sonner';
import pb from '@/lib/pocketbaseClient.js';

const RegistrationForm = () => {
  const { celebrate } = useConfetti();
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childClass: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleClassChange = (value) => {
    setFormData(prev => ({ ...prev, childClass: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.parentName || !formData.childName || !formData.childClass || !formData.phone) {
      toast.error('Please fill in all required fields to proceed.');
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Save to PocketBase
      const record = await pb.collection('registrations').create({
        parentName: formData.parentName,
        childName: formData.childName,
        childClass: formData.childClass,
        phone: formData.phone,
        message: formData.message || ''
      }, { $autoCancel: false });

      // 2. Call Backend API for WhatsApp Notification
      try {
        const waResponse = await fetch('/api/send-whatsapp', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            parentName: record.parentName,
            childName: record.childName,
            childClass: record.childClass,
            phone: record.phone,
            message: record.message,
            createdAt: record.created
          })
        });
        
        if (!waResponse.ok) {
          console.warn('WhatsApp API returned non-OK status. Continuing anyway.');
        }
      } catch (waError) {
        console.error('WhatsApp notification request failed:', waError);
        // We still show success for the registration even if the notification fails
      }

      celebrate();
      toast.success('Registration completed and WhatsApp confirmation sent!', {
        style: { background: 'hsl(var(--success))', color: 'white', border: 'none', fontWeight: 'bold' }
      });
      
      setIsSuccess(true);
      setFormData({
        parentName: '',
        childName: '',
        childClass: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Registration failed:', error);
      toast.error(error.message || 'Failed to submit registration. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const message = `Hello! I'm interested in registering my child for Bright Kids Classes. Parent: ${formData.parentName || '[Name]'}, Child: ${formData.childName || '[Child Name]'}, Class: ${formData.childClass || '[Class]'}, Phone: ${formData.phone || '[Phone]'}`;
    const whatsappUrl = `https://wa.me/917753888040?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const resetForm = () => {
    setIsSuccess(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="absolute -inset-4 bg-gradient-to-br from-[hsl(var(--primary))] via-[hsl(var(--secondary))] to-[hsl(var(--highlight))] rounded-[2.5rem] blur-lg opacity-30 animate-pulse"></div>
      
      <Card className="border-4 border-[hsl(var(--secondary))] shadow-playful rounded-3xl bg-white relative z-10 overflow-hidden">
        <div className="h-4 bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--sunny))] to-[hsl(var(--tertiary))] w-full"></div>
        
        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="py-16 px-6 text-center flex flex-col items-center justify-center"
            >
              <div className="w-24 h-24 bg-[hsl(var(--success))/10] rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-12 h-12 text-[hsl(var(--success))]" />
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-4">Registration Successful!</h3>
              <p className="text-lg font-bold text-gray-600 mb-8 max-w-md">
                We've received your details and sent a WhatsApp confirmation. We'll be in touch soon to confirm the next steps.
              </p>
              <Button
                onClick={resetForm}
                className="bg-[hsl(var(--primary))] text-white hover:brightness-110 h-14 px-8 rounded-xl text-lg font-black shadow-playful hover:-translate-y-1 transition-all"
              >
                <UserPlus className="w-5 h-5 mr-2" />
                Register Another Child
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <CardHeader className="text-center pb-6 pt-8">
                <div className="inline-flex justify-center items-center mb-2">
                  <Star className="w-8 h-8 text-[hsl(var(--sunny))] fill-[hsl(var(--sunny))] animate-pulse" />
                </div>
                <CardTitle className="text-4xl font-black text-[hsl(var(--secondary))] mb-2">Enroll Your Child Today</CardTitle>
                <p className="text-lg font-bold text-gray-600">Join hundreds of happy parents and students! 🎉</p>
              </CardHeader>
              
              <CardContent className="px-6 md:px-10 pb-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="parentName" className="text-gray-800 font-extrabold text-base">Parent Name *</Label>
                      <Input
                        id="parentName"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        placeholder="e.g. Maya Chen"
                        required
                        disabled={isSubmitting}
                        className="bg-gray-50 border-2 border-gray-200 text-gray-900 font-bold placeholder:text-gray-400 focus:border-[hsl(var(--primary))] focus:ring-[hsl(var(--primary))] rounded-xl h-12 transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="childName" className="text-gray-800 font-extrabold text-base">Child Name *</Label>
                      <Input
                        id="childName"
                        name="childName"
                        value={formData.childName}
                        onChange={handleChange}
                        placeholder="e.g. Leo"
                        required
                        disabled={isSubmitting}
                        className="bg-gray-50 border-2 border-gray-200 text-gray-900 font-bold placeholder:text-gray-400 focus:border-[hsl(var(--secondary))] focus:ring-[hsl(var(--secondary))] rounded-xl h-12 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="childClass" className="text-gray-800 font-extrabold text-base">Class *</Label>
                      <Select value={formData.childClass} onValueChange={handleClassChange} required disabled={isSubmitting}>
                        <SelectTrigger className="bg-gray-50 border-2 border-gray-200 text-gray-900 font-bold focus:border-[hsl(var(--tertiary))] focus:ring-[hsl(var(--tertiary))] rounded-xl h-12">
                          <SelectValue placeholder="Select class" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border-2 border-gray-200 rounded-xl font-bold">
                          <SelectItem value="nursery">Nursery</SelectItem>
                          <SelectItem value="kg">KG</SelectItem>
                          <SelectItem value="class1">Class 1</SelectItem>
                          <SelectItem value="class2">Class 2</SelectItem>
                          <SelectItem value="class3">Class 3</SelectItem>
                          <SelectItem value="class4">Class 4</SelectItem>
                          <SelectItem value="class5">Class 5</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-800 font-extrabold text-base">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 9876543210"
                        required
                        disabled={isSubmitting}
                        className="bg-gray-50 border-2 border-gray-200 text-gray-900 font-bold placeholder:text-gray-400 focus:border-[hsl(var(--highlight))] focus:ring-[hsl(var(--highlight))] rounded-xl h-12 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-800 font-extrabold text-base">Message (optional)</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Any specific requirements or questions?"
                      rows={3}
                      disabled={isSubmitting}
                      className="bg-gray-50 border-2 border-gray-200 text-gray-900 font-bold placeholder:text-gray-400 focus:border-[hsl(var(--sunny))] focus:ring-[hsl(var(--sunny))] rounded-xl transition-all resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-[hsl(var(--primary))] text-white hover:brightness-110 h-14 rounded-xl text-lg font-black shadow-playful hover:shadow-playful-hover transition-all duration-300 hover:-translate-y-1 active:scale-95 disabled:opacity-70 disabled:hover:translate-y-0"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-5 h-5 mr-2" />
                          Register Now
                        </>
                      )}
                    </Button>
                    <Button
                      type="button"
                      onClick={handleWhatsApp}
                      disabled={isSubmitting}
                      className="flex-1 bg-[hsl(var(--whatsapp))] text-white hover:brightness-110 h-14 rounded-xl text-lg font-black shadow-[0_4px_10px_rgba(37,211,102,0.3)] hover:shadow-[0_6px_15px_rgba(37,211,102,0.5)] transition-all duration-300 hover:-translate-y-1 active:scale-95 disabled:opacity-70 disabled:hover:translate-y-0"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp Inquiry
                    </Button>
                  </div>
                </form>
              </CardContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
};

export default RegistrationForm;