'use client';

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const YEAR_LEVELS = [
  'Select year level',
  'Years 7-10',
  'VCE',
  'University 1st Year',
  'University 2nd Year',
];

export default function ContactForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    yearLevel: '',
    subjects: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    // Simple validation
    if (!formData.name || !formData.number || !formData.email || !formData.yearLevel || !formData.subjects) {
      alert('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Thank you for your interest! We have sent a confirmation email to you and will contact you soon.');
        onClose();
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Sorry, there was an error sending your message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View style={styles.modalOverlay}>
      <View style={styles.modalContent}>
        <TouchableOpacity style={styles.modalClose} onPress={onClose} disabled={isSubmitting}>
          <Text style={styles.modalCloseText}>×</Text>
        </TouchableOpacity>

        <Text style={styles.modalTitle}>Contact Us</Text>

        <ScrollView style={styles.formScroll}>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Name *</Text>
            <TextInput
              style={styles.input}
              value={formData.name}
              onChangeText={(text) => setFormData({ ...formData, name: text })}
              placeholder="Enter your name"
              placeholderTextColor="#888"
              editable={!isSubmitting}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Phone Number *</Text>
            <TextInput
              style={styles.input}
              value={formData.number}
              onChangeText={(text) => setFormData({ ...formData, number: text })}
              placeholder="Enter your phone number"
              placeholderTextColor="#888"
              keyboardType="phone-pad"
              editable={!isSubmitting}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Email *</Text>
            <TextInput
              style={styles.input}
              value={formData.email}
              onChangeText={(text) => setFormData({ ...formData, email: text })}
              placeholder="Enter your email"
              placeholderTextColor="#888"
              keyboardType="email-address"
              autoCapitalize="none"
              editable={!isSubmitting}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Year Level *</Text>
            <View style={styles.yearLevelContainer}>
              {YEAR_LEVELS.slice(1).map((level) => (
                <TouchableOpacity
                  key={level}
                  disabled={isSubmitting}
                  style={[
                    styles.yearLevelButton,
                    formData.yearLevel === level && styles.yearLevelButtonSelected,
                  ]}
                  onPress={() => setFormData({ ...formData, yearLevel: level })}
                >
                  <Text
                    style={[
                      styles.yearLevelText,
                      formData.yearLevel === level && styles.yearLevelTextSelected,
                    ]}
                  >
                    {level}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Subjects of Interest *</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={formData.subjects}
              onChangeText={(text) => setFormData({ ...formData, subjects: text })}
              placeholder="e.g., Maths, Physics, Chemistry"
              placeholderTextColor="#888"
              multiline={true}
              numberOfLines={4}
              editable={!isSubmitting}
            />
          </View>

          <View style={styles.formActions}>
            <TouchableOpacity
              style={styles.btnCancel}
              onPress={onClose}
              disabled={isSubmitting}
            >
              <Text style={styles.btnText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btnSubmit, isSubmitting && { opacity: 0.7 }]}
              onPress={handleSubmit}
              disabled={isSubmitting}
            >
              <Text style={styles.btnText}>
                {isSubmitting ? 'Sending...' : 'Submit'}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    zIndex: 9999,
  },
  modalContent: {
    backgroundColor: '#2d2d2d',
    borderWidth: 2,
    borderColor: '#dc2626',
    borderRadius: 10,
    padding: 40,
    maxWidth: 540,
    width: '100%',
    maxHeight: '90%',
    position: 'relative',
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 40,
  },
  modalClose: {
    position: 'absolute',
    top: 15,
    right: 20,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  modalCloseText: {
    color: '#fff',
    fontSize: 32,
    lineHeight: 32,
  },
  modalTitle: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  formScroll: {
    width: '100%',
  },
  formGroup: {
    marginBottom: 24,
  },
  label: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#1a1a1a',
    borderWidth: 2,
    borderColor: '#555',
    borderRadius: 6,
    padding: 14,
    color: '#fff',
    fontSize: 16,
  },
  textArea: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  yearLevelContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  yearLevelButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#555',
    backgroundColor: '#1a1a1a',
  },
  yearLevelButtonSelected: {
    borderColor: '#dc2626',
    backgroundColor: '#dc2626',
  },
  yearLevelText: {
    color: '#fff',
    fontSize: 14,
  },
  yearLevelTextSelected: {
    fontWeight: 'bold',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 16,
    marginTop: 10,
  },
  btnCancel: {
    backgroundColor: '#555',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 6,
  },
  btnSubmit: {
    backgroundColor: '#dc2626',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 6,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
