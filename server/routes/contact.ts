import { Router, Request, Response } from 'express';
import { ContactSubmission, ContactResponse, ApiResponse } from '../../src/types/portfolio';

const router = Router();

// Store submissions in-memory during session
const contactSubmissions: Array<ContactSubmission & { id: string; receivedAt: string }> = [];

router.post('/', (req: Request, res: Response) => {
  const start = Date.now();
  const { name, email, subject, message, inquiryType } = req.body as Partial<ContactSubmission>;

  if (!name || !name.trim()) {
    res.status(400).json({
      success: false,
      endpoint: '/api/contact',
      timestamp: new Date().toISOString(),
      latencyMs: Date.now() - start,
      error: 'Your name is required.'
    });
    return;
  }

  if (!email || !email.trim() || !email.includes('@')) {
    res.status(400).json({
      success: false,
      endpoint: '/api/contact',
      timestamp: new Date().toISOString(),
      latencyMs: Date.now() - start,
      error: 'A valid email address is required.'
    });
    return;
  }

  if (!message || message.trim().length < 10) {
    res.status(400).json({
      success: false,
      endpoint: '/api/contact',
      timestamp: new Date().toISOString(),
      latencyMs: Date.now() - start,
      error: 'Message must be at least 10 characters long.'
    });
    return;
  }

  const ticketId = `MSG-${Date.now().toString(36).toUpperCase()}-${Math.floor(Math.random() * 900 + 100)}`;
  const submissionRecord = {
    id: ticketId,
    name: name.trim(),
    email: email.trim(),
    subject: (subject || 'General Inquiry').trim(),
    message: message.trim(),
    inquiryType: (inquiryType || 'general') as 'project' | 'hiring' | 'advisory' | 'general',
    receivedAt: new Date().toISOString()
  };

  contactSubmissions.unshift(submissionRecord);

  const responseData: ContactResponse = {
    received: true,
    ticketId,
    timestamp: submissionRecord.receivedAt,
    message: `Thank you, ${name.trim()}! Your message has been routed directly to Oliver Miguel L. Nunag. Reference ticket: ${ticketId}`
  };

  const response: ApiResponse<ContactResponse> = {
    success: true,
    endpoint: '/api/contact',
    timestamp: new Date().toISOString(),
    latencyMs: Date.now() - start,
    data: responseData
  };

  res.status(201).json(response);
});

// GET endpoint to query status or contact info metadata
router.get('/status', (req: Request, res: Response) => {
  const start = Date.now();
  res.json({
    success: true,
    endpoint: '/api/contact/status',
    timestamp: new Date().toISOString(),
    latencyMs: Date.now() - start,
    data: {
      status: 'online',
      responseTimeEstimate: 'Within 24 business hours',
      preferredChannels: ['Email', 'LinkedIn'],
      timezone: 'PST (UTC-8)'
    }
  });
});

export default router;
