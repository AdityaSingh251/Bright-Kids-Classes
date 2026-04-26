import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../components/ui/dialog';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Calendar, Send, MessageCircle, Star } from 'lucide-react';
import { toast } from 'sonner';

const FreeDemo = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    childName: '',
    parentName: '',
    phone: '',
    preferredDate: '',
    preferredTime: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.childName || !formData.parentName || !formData.phone) {
      toast.error('Please fill in all required fields');
      return;
    }

    const demos = JSON.parse(localStorage.getItem('demoRequests') || '[]');
    demos.push({
      ...formData,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('demoRequests', JSON.stringify(demos));

    toast.success('Demo class request submitted! We will contact you soon.', {
      style: { background: 'hsl(var(--success))', color: 'white', fontWeight: 'bold' }
    });
    
    setFormData({
      childName: '',
      parentName: '',
      phone: '',
      preferredDate: '',
      preferredTime: ''
    });
    
    onClose();
  };

  const handleWhatsApp = () => {
    const message = `Hello! I would like to book a FREE DEMO class for my child. Parent: ${formData.parentName || '[Name]'}, Child: ${formData.childName || '[Child Name]'}, Phone: ${formData.phone || '[Phone]'}`;
    const whatsappUrl = `https://wa.me/917753888040?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white border-4 border-[hsl(var(--primary))] rounded-3xl shadow-playful p-0 overflow-hidden">
        <div className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] p-6 text-white text-center relative">
          <Star className="w-8 h-8 fill-white absolute top-4 left-4 opacity-50 animate-pulse" />
          <Star className="w-6 h-6 fill-white absolute bottom-4 right-4 opacity-50 animate-pulse" />
          
          <DialogHeader>
            <DialogTitle className="text-3xl font-black text-white flex flex-col items-center gap-2 justify-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2 shadow-lg">
                <Calendar className="w-8 h-8 text-[hsl(var(--primary))]" />
              </div>
              Book Free Demo!
            </DialogTitle>
            <DialogDescription className="text-white/90 font-bold text-base mt-2">
              Experience our fun and engaging classes absolutely free.
            </DialogDescription>
          </DialogHeader>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4 p-6">
          <div>
            <Label htmlFor="childName" className="text-gray-800 font-bold">Child Name *</Label>
            <Input
              id="childName"
              name="childName"
              value={formData.childName}
              onChange={handleChange}
              placeholder="Enter child's name"
              required
              className="mt-1 bg-gray-50 border-2 border-gray-200 text-gray-900 font-bold focus:border-[hsl(var(--primary))] rounded-xl h-11"
            />
          </div>

          <div>
            <Label htmlFor="parentName" className="text-gray-800 font-bold">Parent Name *</Label>
            <Input
              id="parentName"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="mt-1 bg-gray-50 border-2 border-gray-200 text-gray-900 font-bold focus:border-[hsl(var(--secondary))] rounded-xl h-11"
            />
          </div>

          <div>
            <Label htmlFor="phone" className="text-gray-800 font-bold">Phone Number *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
              className="mt-1 bg-gray-50 border-2 border-gray-200 text-gray-900 font-bold focus:border-[hsl(var(--tertiary))] rounded-xl h-11"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="preferredDate" className="text-gray-800 font-bold">Preferred Date</Label>
              <Input
                id="preferredDate"
                name="preferredDate"
                type="date"
                value={formData.preferredDate}
                onChange={handleChange}
                className="mt-1 bg-gray-50 border-2 border-gray-200 text-gray-900 font-bold rounded-xl h-11"
              />
            </div>
            <div>
              <Label htmlFor="preferredTime" className="text-gray-800 font-bold">Preferred Time</Label>
              <Input
                id="preferredTime"
                name="preferredTime"
                type="time"
                value={formData.preferredTime}
                onChange={handleChange}
                className="mt-1 bg-gray-50 border-2 border-gray-200 text-gray-900 font-bold rounded-xl h-11"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-4">
            <Button
              type="submit"
              className="w-full bg-[hsl(var(--primary))] text-white hover:brightness-110 font-bold rounded-xl h-12 shadow-playful hover:translate-y-[-2px] transition-all"
            >
              <Send className="w-5 h-5 mr-2" />
              Submit Request
            </Button>
            <Button
              type="button"
              onClick={handleWhatsApp}
              className="w-full bg-[hsl(var(--whatsapp))] text-white hover:brightness-110 font-bold rounded-xl h-12 shadow-[0_4px_10px_rgba(37,211,102,0.3)] hover:shadow-[0_6px_15px_rgba(37,211,102,0.5)] hover:translate-y-[-2px] transition-all"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Book via WhatsApp
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FreeDemo;
