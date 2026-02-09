'use client';

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import ContactForm from '../components/ContactForm';

export default function Page() {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <SafeAreaView style={styles.app}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TouchableOpacity
          style={styles.contactButton}
          onPress={() => setShowContactForm(true)}
        >
          <Text style={styles.contactButtonText}>Contact</Text>
        </TouchableOpacity>

        <View style={styles.container}>
          {/* Header Section */}
          <View style={styles.header}>
            <View style={styles.logoSection}>
              <View style={styles.logo}>
                <Text style={styles.logoShanks}>SHANKS</Text>
                <Text style={styles.logoEducation}>EDUCATION</Text>
              </View>
              <Text style={styles.tagline}>Hard Work Determines Results</Text>
            </View>
            <View style={styles.tutorImageContainer}>
              <Image
                source={{ uri: '/images/tutor.jpg' }}
                style={styles.tutorImage}
                defaultSource={{ uri: '/images/tutor.png' }}
              />
            </View>
          </View>

          {/* Diagonal Overlay Section */}
          <View style={styles.diagonalSection}>
            <View style={styles.diagonalOverlay} />

            {/* Services Header */}
            <View style={styles.servicesHeader}>
              <View style={styles.servicesHeaderBox}>
                <Text style={styles.servicesHeaderText}>SERVICES INCLUDE</Text>
              </View>
            </View>

            {/* Main Content Grid */}
            <View style={styles.mainContent}>
              <View style={styles.column}>
                <View style={styles.subjectsSection}>
                  <Text style={styles.subjectsTitle}>Subjects Taught:</Text>
                  <Text style={styles.subjectItem}>• Uni 1st and 2nd Year Maths</Text>
                  <Text style={styles.subjectItem}>• VCE Methods, Spec, Physics</Text>
                  <Text style={styles.subjectItem}>• Years 7-10 Maths and Science</Text>
                </View>
              </View>

              <View style={styles.column}>
                <View style={styles.servicesList}>
                  <Text style={styles.serviceItem}>TAILORED LESSONS</Text>
                  <Text style={styles.serviceItem}>CONCEPT MASTERY</Text>
                  <Text style={styles.serviceItem}>LEARNING STRATEGIES</Text>
                </View>
              </View>
            </View>

            {/* Motivational Text */}
            <View style={styles.motivational}>
              <Text style={styles.motivationalText}>Effort over Excuses</Text>
              <Text style={styles.motivationalText}>Discipline over Talent</Text>
            </View>
          </View>

          {/* Bottom Section */}
          <View style={styles.bottomSection}>
            <View style={styles.sectionColumn}>
              <Text style={styles.sectionTitle}>My Mission</Text>
              <Text style={styles.missionText}>
                Every student learns differently — there's no one-size-fits-all approach.
                I tailor lessons to the student, not just the subject. Whether it's algebra,
                chemistry, or time pressure, I'll overcome those challenges with you and build
                confidence and skill. Understanding leads to appreciation — appreciation leads
                to improved performance. Many students dislike mathematics and science simply
                because they were not taught well enough. My mission is to not only remove those
                fears, but spark a genuine interest — maybe even a love — for learning.
              </Text>
            </View>

            <View style={styles.sectionColumn}>
              <Text style={styles.sectionTitle}>About Me</Text>
              <View style={styles.aboutList}>
                {[
                  'Biomedical Engineering Student at Monash',
                  'Distinction WAM',
                  'High Distinction in Advanced Engineering Maths',
                  'Aerostructures engineer at Monash High Powered Rocketry',
                  'John Monash Science School Graduate',
                  '97+ ATAR',
                  '3+ years tutoring experience',
                ].map((item, index) => (
                  <Text key={index} style={styles.aboutItem}>• {item}</Text>
                ))}
              </View>
            </View>
          </View>

          {/* CTA Button Section */}
          <View style={styles.ctaSection}>
            <TouchableOpacity
              style={styles.ctaButton}
              onPress={() => setShowContactForm(true)}
            >
              <Text style={styles.ctaButtonText}>
                Start Your learning journey At Shanks Education
              </Text>
            </TouchableOpacity>
          </View>

          {/* Contact Footer */}
          <View style={styles.contactFooter}>
            <View style={styles.contactInfo}>
              <View style={styles.contactItem}>
                <Text style={styles.contactIcon}>📞</Text>
                <Text style={styles.contactText}>0435 626 232</Text>
              </View>
              <View style={styles.contactItem}>
                <Text style={styles.contactIcon}>✉️</Text>
                <Text style={styles.contactText}>rbarathshankar@gmail.com</Text>
              </View>
              <View style={styles.contactItem}>
                <Text style={styles.contactIcon}>📍</Text>
                <Text style={styles.contactText}>Glen Waverley, VIC</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Contact Form Modal */}
      {showContactForm && (
        <ContactForm onClose={() => setShowContactForm(false)} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  contactButton: {
    position: 'absolute',
    top: 24,
    right: 24,
    backgroundColor: '#dc2626',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 6,
    zIndex: 1000,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
  },
  contactButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#2d2d2d',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingTop: 60,
    paddingHorizontal: 80,
    paddingBottom: 40,
    maxWidth: 1400,
    alignSelf: 'center',
    width: '100%',
  },
  logoSection: {
    flex: 1,
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  logoShanks: {
    fontSize: 52,
    fontWeight: '900',
    color: '#000',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
    letterSpacing: 2,
  },
  logoEducation: {
    fontSize: 52,
    fontWeight: '900',
    color: '#fff',
    backgroundColor: '#dc2626',
    paddingVertical: 10,
    paddingHorizontal: 20,
    letterSpacing: 2,
  },
  tagline: {
    color: '#fff',
    fontSize: 18,
    marginTop: 12,
    fontWeight: '300',
    letterSpacing: 0.5,
  },
  tutorImageContainer: {
    width: 220,
    height: 220,
    borderRadius: 110,
    overflow: 'hidden',
  },
  tutorImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  diagonalSection: {
    position: 'relative',
    paddingVertical: 60,
    paddingHorizontal: 80,
    marginTop: 40,
    maxWidth: 1400,
    alignSelf: 'center',
    width: '100%',
  },
  diagonalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 500,
    backgroundColor: 'rgba(220, 38, 38, 0.3)',
    transform: [{ skewY: '-2deg' }],
    zIndex: 1,
  },
  servicesHeader: {
    zIndex: 10,
    alignItems: 'center',
    marginBottom: 50,
    marginTop: 20,
  },
  servicesHeaderBox: {
    backgroundColor: '#dc2626',
    paddingVertical: 14,
    paddingHorizontal: 40,
  },
  servicesHeaderText: {
    color: '#fff',
    fontSize: 19,
    fontWeight: 'bold',
    letterSpacing: 2.5,
  },
  mainContent: {
    zIndex: 10,
    flexDirection: 'row',
    gap: 80,
  },
  column: {
    flex: 1,
  },
  subjectsSection: {
    marginBottom: 50,
  },
  subjectsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#fff',
    letterSpacing: 0.5,
  },
  subjectItem: {
    color: '#fff',
    fontSize: 17,
    lineHeight: 35,
    marginBottom: 12,
  },
  servicesList: {
    gap: 28,
  },
  serviceItem: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 1.5,
    lineHeight: 36,
  },
  motivational: {
    zIndex: 10,
    alignItems: 'center',
    marginTop: 50,
    paddingTop: 40,
  },
  motivationalText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    lineHeight: 39,
    textAlign: 'center',
  },
  bottomSection: {
    zIndex: 10,
    flexDirection: 'row',
    gap: 80,
    padding: 80,
    marginTop: 20,
    maxWidth: 1400,
    alignSelf: 'center',
    width: '100%',
  },
  sectionColumn: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 28,
    color: '#fff',
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  missionText: {
    fontSize: 17,
    lineHeight: 32,
    color: '#e5e5e5',
    letterSpacing: 0.3,
    textAlign: 'center',
    maxWidth: 600,
    alignSelf: 'center',
  },
  aboutList: {
    paddingLeft: 0,
  },
  aboutItem: {
    color: '#fff',
    fontSize: 17,
    lineHeight: 35,
    marginBottom: 16,
  },
  ctaSection: {
    zIndex: 10,
    alignItems: 'center',
    paddingVertical: 60,
    paddingHorizontal: 80,
    marginTop: 40,
    maxWidth: 1400,
    alignSelf: 'center',
    width: '100%',
  },
  ctaButton: {
    backgroundColor: '#dc2626',
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 8,
    elevation: 6,
    shadowColor: '#dc2626',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
  },
  ctaButtonText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  contactFooter: {
    zIndex: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingVertical: 50,
    paddingHorizontal: 80,
    marginTop: 60,
  },
  contactInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 80,
    flexWrap: 'wrap',
    maxWidth: 1200,
    alignSelf: 'center',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  contactIcon: {
    fontSize: 22,
  },
  contactText: {
    color: '#fff',
    fontSize: 17,
    letterSpacing: 0.3,
  },
});
